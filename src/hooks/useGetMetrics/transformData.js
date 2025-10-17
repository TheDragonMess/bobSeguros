import initialData from "../../data/initialData.json";
import mergedata from "../useGetMetrics/mergeData";

// const initialData = {
//   "status": "success",
//   "data": {
//     "nps": "21",
//     "avg": {
//       "status": "high",
//       "duration": "10 min"
//     },
//     "totalUsers": {
//       "total": 20,
//       "status": "warning"
//     },
//     "channels": {
//       "web": 4,
//       "whatsapp": 9,
//       "appMobile": 7
//     },
//     "actions": [
//       {
//         "_id": "1",
//         "label": "Actualización Datos"
//       },
//       {
//         "_id": "2",
//         "label": "Actualización Datos"
//       },
//       {
//         "_id": "3",
//         "label": "Actualización Datos"
//       },
//       {
//         "_id": "4",
//         "label": "Asistencia Carretera"
//       },
//       {
//         "_id": "5",
//         "label": "Asistencia Carretera"
//       },
//       {
//         "_id": "6",
//         "label": "Cotización"
//       },
//       {
//         "_id": "7",
//         "label": "Asistencia Carretera"
//       },
//       {
//         "_id": "8",
//         "label": "Actualización Datos"
//       },
//       {
//         "_id": "9",
//         "label": "Actualización Datos"
//       },
//       {
//         "_id": "10",
//         "label": "Asistencia Carretera"
//       },
//       {
//         "_id": "11",
//         "label": "Asistencia Carretera"
//       },
//       {
//         "_id": "12",
//         "label": "Reclamo"
//       },
//       {
//         "_id": "13",
//         "label": "Asistencia Carretera"
//       },
//       {
//         "_id": "14",
//         "label": "Asistencia Carretera"
//       },
//       {
//         "_id": "15",
//         "label": "Cotización"
//       },
//       {
//         "_id": "16",
//         "label": "Asistencia Carretera"
//       },
//       {
//         "_id": "17",
//         "label": "Asistencia Carretera"
//       },
//       {
//         "_id": "18",
//         "label": "Asistencia Carretera"
//       },
//       {
//         "_id": "19",
//         "label": "Cotización"
//       },
//       {
//         "_id": "20",
//         "label": "Actualización Datos"
//       }
//     ],
//     "topics": [
//       {
//         "_id": "01",
//         "label": "SOAT"
//       },
//       {
//         "_id": "20",
//         "label": "Seguro de Vida"
//       },
//       {
//         "_id": "03",
//         "label": "SOAT"
//       },
//       {
//         "_id": "04",
//         "label": "Seguro de Vida"
//       },
//       {
//         "_id": "05",
//         "label": "Precios"
//       },
//       {
//         "_id": "06",
//         "label": "Cobertura de Salud"
//       },
//       {
//         "_id": "07",
//         "label": "Precios"
//       },
//       {
//         "_id": "08",
//         "label": "SOAT"
//       },
//       {
//         "_id": "09",
//         "label": "Precios"
//       },
//       {
//         "_id": "010",
//         "label": "Precios"
//       },
//       {
//         "_id": "011",
//         "label": "SOAT"
//       },
//       {
//         "_id": "012",
//         "label": "Seguro de Vida"
//       },
//       {
//         "_id": "013",
//         "label": "Reembolsos"
//       },
//       {
//         "_id": "014",
//         "label": "Seguro de Vida"
//       },
//       {
//         "_id": "015",
//         "label": "Cobertura de Salud"
//       },
//       {
//         "_id": "016",
//         "label": "Reembolsos"
//       },
//       {
//         "_id": "017",
//         "label": "Precios"
//       },
//       {
//         "_id": "018",
//         "label": "Precios"
//       },
//       {
//         "_id": "019",
//         "label": "Precios"
//       },
//       {
//         "_id": "020",
//         "label": "Precios"
//       }
//     ],
//     "moods": [
//       {
//         "_id": "0001",
//         "label": "Enojado",
//         "percentage": 2,
//         "exceeded": false
//       },
//       {
//         "_id": "0002",
//         "label": "Insatisfecho",
//         "exceeded": false,
//         "percentage": 14
//       },
//       {
//         "_id": "0003",
//         "exceeded": true,
//         "percentage": 58,
//         "label": "Satisfecho"
//       },
//       {
//         "_id": "0004",
//         "label": "Conforme",
//         "percentage": 40,
//         "exceeded": false
//       },
//       {
//         "_id": "0005",
//         "label": "Desconforme",
//         "percentage": 5,
//         "exceeded": false
//       }
//     ],
//     "stats": [
//       {
//         "_id": "stat-1",
//         "label": "Tiempo de respuesta",
//         "ai": "1 min",
//         "user": "2 min"
//       },
//       {
//         "_id": "stat-2",
//         "label": "Calidad de respuesta",
//         "ai": "Low",
//         "user": "Med"
//       }
//     ],
//     "outcomeStats": [
//       {
//         "_id": "outcome-stat-1",
//         "label": "Resueltos",
//         "slug": "resolved",
//         "ai": {
//           "total": 100,
//           "percentage": 25
//         },
//         "user": {
//           "total": 100,
//           "percentage": 25
//         }
//       },
//       {
//         "_id": "outcome-stat-2",
//         "label": "Abandonados",
//         "slug": "abandoned",
//         "ai": {
//           "total": 100,
//           "percentage": 25
//         },
//         "user": {
//           "total": 100,
//           "percentage": 25
//         }
//       },
//       {
//         "_id": "outcome-stat-3",
//         "label": "Desambiguación",
//         "slug": "disambiguation",
//         "ai": {
//           "total": 100,
//           "percentage": 25
//         },
//         "user": {
//           "total": 100,
//           "percentage": 25
//         }
//       },
//       {
//         "_id": "outcome-stat-4",
//         "label": "Derivaciones",
//         "slug": "derivations",
//         "ai": {
//           "total": 100,
//           "percentage": 25
//         },
//         "user": {
//           "total": 100,
//           "percentage": 25
//         }
//       },
//       {
//         "_id": "outcome-stat-5",
//         "label": "Alucinaciones",
//         "slug": "hallucinations",
//         "ai": {
//           "total": 100,
//           "percentage": 25
//         },
//         "user": {
//           "total": 100,
//           "percentage": 25
//         }
//       }
//     ],
//     "faqs": [
//       {
//         "_id": "faq-1",
//         "answer": "Med",
//         "question": "¿Cuánto tiempo dura el seguro?"
//       },
//       {
//         "_id": "faq-2",
//         "answer": "Med",
//         "question": "¿Cuánto tiempo dura el seguro?"
//       },
//       {
//         "_id": "faq-3",
//         "answer": "Med",
//         "question": "¿Cuánto tiempo dura el seguro?"
//       },
//       {
//         "_id": "faq-4",
//         "answer": "Med",
//         "question": "¿Cuánto tiempo dura el seguro?"
//       }
//     ]
//   }
// }

export function transformData(data) {
  if (!data || !data.analytics) return {};

  const transformSentiments = (sentiments, threshold) => {
    const total = Object.values(sentiments).reduce((sum, val) => sum + val, 0);
    return Object.entries(sentiments).map(([label, value]) => {
      const percentage = (value / total) * 100;
      return {
        id: crypto.randomUUID(),
        label,
        percentage: Number(percentage.toFixed(2)),
        exceed: percentage > threshold
      };
    });
  };

  const transform = (obj, existingArray = []) => {
    if (!obj || typeof obj !== "object") {
      throw new Error("Parameter 'obj' must be a valid object");
    }

    const total = Object.values(obj).reduce((sum, val) => sum + val, 0);

    const transformed = Object.entries(obj).map(([label, value]) => {
      const percentage = (value / total) * 100;
      return {
        id: crypto.randomUUID(),
        label,
        percentage: Number(percentage.toFixed(2))
      };
    });

    // Append to existing array (immutably)
    return [...existingArray, ...transformed];
  };

  const avgDuration = Math.abs(Number(data.analytics.chat_average_duration));
  const moods = transformSentiments(data.analytics.sentiments, 30);
  const topics = transform(data.analytics.topics, initialData.data.topics);
  const actions = transform(data.analytics.trends, initialData.data.actions);

  const { totalMoods, totalUsers } = mergedata(initialData, moods, data.analytics.unique_users);

  return {
    status: "success",
    data: {
      nps: "23",
      avg: {
        status: "high",
        duration: `${Math.trunc(
          (avgDuration + 200) / (initialData.data.totalUsers.total + data.analytics.unique_users)
        )} min`
      },
      totalUsers: {
        total: `${initialData.data.totalUsers.total + data.analytics.unique_users}`,
        status: "warning"
      },
      channels: {
        web: `${
          initialData.data.channels.web + data.analytics.sessions_by_channel["Web chat"] ??
          initialData.data.channels.web
        }`,
        whatsapp: `${
          data.analytics.sessions_by_channel["whatsapp"] != null
            ? initialData.data.channels.whatsapp + data.analytics.sessions_by_channel["whatsapp"]
            : initialData.data.channels.whatsapp
        }`,
        appMobile: `${
          data.analytics.sessions_by_channel["appMobile"] != null
            ? initialData.data.channels.appMobile + data.analytics.sessions_by_channel["appMobile"]
            : initialData.data.channels.appMobile
        }`
      },
      actions,
      topics,
      moods: totalMoods,
      stats: initialData.data.stats,
      outcomeStats: initialData.data.outcomeStats,
      faqs: initialData.data.faqs
    }
  };
}
