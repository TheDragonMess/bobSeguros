// src/hooks/useFetchApi.js
import { useState, useEffect, useCallback, useRef } from "react";
import { transformData } from "hooks/useGetMetrics/transformData";
import initialData from "../../data/initialData.json";
import { config } from "../config";

export default function useFetchApi(endpoint, tokenOverride, refreshInterval = 0) {
  const [data, setData] = useState(null);
  const [fluctuated, setFluctuated] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = (config && config.API_URL) || "";
  const token = tokenOverride || (config && config.API_TOKEN) || "";

  const abortRef = useRef(null);
  const mountedRef = useRef(true);

  const setFromInitial = () => {
    const merged = { status: "success", data: initialData.data };
    setData(merged);
    setFluctuated(merged.data.moods || []);
  };

  const fetchData = useCallback(async () => {
    // If we don’t have base URL yet, just use initialData (no spinner forever)
    if (!endpoint || !baseUrl) {
      setError(!endpoint ? "Missing endpoint" : "Missing API base URL");
      setLoading(false);
      setFromInitial();
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
      // let transformData do its job (it already merges into initialData)
      const transformed = transformData(raw);

      setData(transformed);
      setFluctuated(transformed?.data?.moods || []);
    } catch (err) {
      if (err.name === "AbortError") return;
      setError(err.message || String(err));
      setFromInitial(); // <- fallback to initialData on error
    } finally {
      setLoading(false);
    }
  }, [endpoint, baseUrl, token]);

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

  useEffect(() => {
    if (!data?.data?.moods) return;
    let id;
    const tick = () => {
      const src = data.data.moods;
      if (!Array.isArray(src)) return;
      const next = src.map((m) => {
        const p = Number(m.percentage) || 0;
        const pct = (Math.random() * (30 - 10) + 10) / 100;
        const dir = Math.random() > 0.5 ? 1 : -1;
        let np = Math.round(p + p * pct * dir);
        if (np >= 100) np = 95 + Math.floor(Math.random() * 5);
        if (np < 0) np = 0;
        return { ...m, percentage: np };
      });
      setFluctuated(next);
    };
    const start = () => {
      if (!id) id = setInterval(tick, 1000);
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
