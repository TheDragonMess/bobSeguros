import { useState, useEffect, useCallback } from "react";
import { transformData } from "../hooks/useGetMetrics/transformData";

// helper to generate fluctuated sentiments
function fluctuateSentiments(sentiments) {
  if (!Array.isArray(sentiments)) return [];

  return sentiments.map((sentiment) => {
    let { percentage } = sentiment;

    const fluctuationPercent = (Math.random() * (30 - 10) + 10) / 100; // 10–30%
    const upOrDown = Math.random() > 0.5 ? 1 : -1;

    let newPercentage = Math.round(percentage + percentage * fluctuationPercent * upOrDown);

    // If percentage hits 100, force below 100
    if (newPercentage >= 100) {
      newPercentage = Math.max(0, 100 - Math.floor(Math.random() * 7 + 1)); // 95–99
    }

    // never negative
    if (newPercentage < 0) newPercentage = 0;

    return {
      ...sentiment,
      percentage: newPercentage
    };
  });
}

export default function useFetchApi(endpoint, token, refreshInterval = 0) {
  const [data, setData] = useState(null); // transformed API data
  const [fluctuated, setFluctuated] = useState(null); // fake fluctuations
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://boss-watson.malli.pe";

  const fetchData = useCallback(async () => {
    if (!endpoint) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${url}/${endpoint}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : undefined
        }
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const rawJson = await response.json();
      const transformed = transformData(rawJson);
      setData(transformed);
      setFluctuated(transformed.data.moods); // initialize fluctuations
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [endpoint, token]);

  // Fetch loop
  useEffect(() => {
    fetchData();
    let intervalId;
    if (refreshInterval > 0) {
      intervalId = setInterval(fetchData, refreshInterval);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [fetchData, refreshInterval]);

  // Fluctuation loop (500ms) with visibility handling
  useEffect(() => {
    if (!data?.data.moods) return;

    let intervalId;

    function startFluctuations() {
      if (!intervalId) {
        intervalId = setInterval(() => {
          setFluctuated(fluctuateSentiments(data.data.moods));
        }, 1000);
      }
    }

    function stopFluctuations() {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        stopFluctuations();
      } else {
        startFluctuations();
      }
    }

    // Start initially
    startFluctuations();
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopFluctuations();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [data]);

  return {
    metrics1: data, // full transformed API data
    sentiments: fluctuated, // fake fluctuated values
    isLoading1: loading,
    error,
    refetch: fetchData
  };
}
