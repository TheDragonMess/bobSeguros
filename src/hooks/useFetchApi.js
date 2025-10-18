// src/hooks/useFetchApi.js
import { useState, useEffect, useCallback, useRef } from "react";
import { transformData } from "./useGetMetrics/transformData";
// (optional) if you want to fall back to initial data on errors, import it:
// import initialData from "../data/initialData.json";

function readRuntime(key) {
  return typeof window !== "undefined" && window.__APP_CONFIG__
    ? window.__APP_CONFIG__[key] || ""
    : "";
}

export default function useFetchApi(endpoint, tokenOverride, refreshInterval = 0) {
  const [data, setData] = useState(null);
  const [fluctuated, setFluctuated] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ compute inside the hook (so tokenOverride is in scope)
  const baseUrl = readRuntime("API_URL");
  const token = tokenOverride || readRuntime("API_TOKEN");

  const abortRef = useRef(null);
  const mountedRef = useRef(true);

  const fetchData = useCallback(async () => {
    // don’t crash if config/endpoint isn’t ready
    if (!endpoint || !baseUrl) {
      setLoading(false);
      setError(!endpoint ? "Missing endpoint" : "Missing API base URL");
      return;
    }

    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);

    try {
      const url = `${baseUrl.replace(/\/+$/, "")}/${endpoint.replace(/^\/+/, "")}`;
      const headers = { Accept: "application/json" };
      if (token) headers.Authorization = `Bearer ${token}`;

      const res = await fetch(url, { headers, signal: controller.signal });
      if (!res.ok) {
        const msg = await res.text().catch(() => "");
        throw new Error(`Error ${res.status}: ${res.statusText}${msg ? ` - ${msg}` : ""}`);
      }

      const raw = await res.json();
      const transformed = transformData(raw);
      if (!mountedRef.current) return;

      setData(transformed);
      setFluctuated(transformed?.data?.moods || []);
    } catch (err) {
      if (err.name === "AbortError") return;
      if (!mountedRef.current) return;
      setError(err.message || String(err));

      // Optional fallback:
      // setData({ status: "success", data: initialData.data });
      // setFluctuated(initialData.data.moods || []);
    } finally {
      if (!mountedRef.current) return;
      setLoading(false);
    }
  }, [endpoint, baseUrl, token]);

  // initial + polling
  useEffect(() => {
    mountedRef.current = true;
    fetchData();
    let id;
    if (refreshInterval > 0) id = setInterval(fetchData, refreshInterval);
    return () => {
      mountedRef.current = false;
      if (id) clearInterval(id);
      if (abortRef.current) abortRef.current.abort();
    };
  }, [fetchData, refreshInterval]);

  // moods fluctuation
  useEffect(() => {
    if (!data?.data?.moods) return;
    let id;
    const start = () => {
      if (!id) {
        id = setInterval(() => {
          const src = data.data.moods;
          const next = Array.isArray(src)
            ? src.map((m) => {
                const p = Number(m.percentage) || 0;
                const pct = (Math.random() * (30 - 10) + 10) / 100;
                const dir = Math.random() > 0.5 ? 1 : -1;
                let np = Math.round(p + p * pct * dir);
                if (np >= 100) np = 95 + Math.floor(Math.random() * 5);
                if (np < 0) np = 0;
                return { ...m, percentage: np };
              })
            : [];
          setFluctuated(next);
        }, 1000);
      }
    };
    const stop = () => {
      if (id) {
        clearInterval(id);
        id = null;
      }
    };
    const onVis = () => (document.hidden ? stop() : start());
    start();
    document.addEventListener("visibilitychange", onVis);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [data]);

  return { metrics1: data, sentiments: fluctuated, isLoading1: loading, error, refetch: fetchData };
}
