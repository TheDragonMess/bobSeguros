// src/hooks/useGetMetrics/transformData.js
import initialData from "../../data/initialData.json";
import mergedata from "../useGetMetrics/mergeData";

export function transformData(data) {
  if (!data || !data.analytics) {
    // If backend returns nothing useful, just surface initialDatamodified
    return { status: "success", data: initialData.data };
  }

  const transformSentiments = (sentiments, threshold) => {
    const vals = Object.values(sentiments || {});
    const total = vals.reduce((sum, val) => sum + Number(val || 0), 0) || 1;
    return Object.entries(sentiments || {}).map(([label, value]) => {
      const percentage = (Number(value || 0) / total) * 100;
      return {
        id: crypto.randomUUID(),
        label,
        percentage: Number(percentage.toFixed(2)),
        exceeded: percentage > threshold // <- normalized to "exceeded"
      };
    });
  };

  const transform = (obj, existingArray = []) => {
    if (!obj || typeof obj !== "object") return [...existingArray];
    const vals = Object.values(obj);
    const total = vals.reduce((sum, val) => sum + Number(val || 0), 0) || 1;

    const transformed = Object.entries(obj).map(([label, value]) => {
      const percentage = (Number(value || 0) / total) * 100;
      return {
        id: crypto.randomUUID(),
        label,
        percentage: Number(percentage.toFixed(2))
      };
    });

    return [...existingArray, ...transformed];
  };

  const avgDurationAbs = Math.abs(Number(data.analytics.chat_average_duration || 0));
  const moods = transformSentiments(data.analytics.sentiments || {}, 30);
  const topics = transform(data.analytics.topics || {}, initialData.data.topics);
  const actions = transform(data.analytics.trends || {}, initialData.data.actions);

  const { totalMoods, totalUsers } = mergedata(
    initialData,
    moods,
    Number(data.analytics.unique_users || 0)
  );

  const webAdd = (data.analytics.sessions_by_channel || {})["Web chat"] ?? 0;
  const whatsappAdd = (data.analytics.sessions_by_channel || {})["whatsapp"] ?? 0;
  const appMobileAdd = (data.analytics.sessions_by_channel || {})["appMobile"] ?? 0;

  const totalUsersTotal =
    Number(initialData.data.totalUsers.total || 0) + Number(data.analytics.unique_users || 0);

  return {
    status: "success",
    data: {
      nps: "23",
      avg: {
        status: "high",
        duration: `${Math.trunc(
          (avgDurationAbs + 200) /
            (Number(initialData.data.totalUsers.total || 0) +
              Number(data.analytics.unique_users || 0) || 1)
        )} min`
      },
      totalUsers: {
        total: totalUsersTotal, // keep as number (avoid string math later)
        status: "warning"
      },
      channels: {
        // wrap the RHS of ?? to avoid precedence surprises
        web: Number(initialData.data.channels.web || 0) + (Number(webAdd) || 0),
        whatsapp: Number(initialData.data.channels.whatsapp || 0) + (Number(whatsappAdd) || 0),
        appMobile: Number(initialData.data.channels.appMobile || 0) + (Number(appMobileAdd) || 0)
      },
      actions,
      topics,
      moods: totalMoods, // merged by mergedata()
      stats: initialData.data.stats,
      outcomeStats: initialData.data.outcomeStats,
      faqs: initialData.data.faqs
    }
  };
}
