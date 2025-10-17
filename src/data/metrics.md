const apiResponse = {
status: "success",
data: {
avg: {
status: "high", // high o low, para mostrar direccion de flecha
duration: "10 min",
},
nps: "07", // Debe ser en formato string para mostrar el numero 0 cuando es 0 > x < 10,
totalUsers: {
total: 200,
status: "warning", // safe, warning, critical . Safe en color verde, warning en color amarillo, critical en color rojo
},
channels: {
male: 32, // de 0 a 100
female: 55, // de 0 a 100
unknown: 13, // de 0 a 100
},
topics: [
// El ID del topic debe ser generado para usarse como key en el mapeo. IMPORTANTE: propiedad 'style' define como se muestra la palabra
{
_id: "actions-1",
label: "Account Management",
style: {
fontSize: "22px",
},
},
{
_id: "actions-2",
label: "Account Management",
style: {
fontSize: "12px",
fontWeight: "light",
},
},
{
_id: "actions-3",
label: "Loans and Credit",
style: {
fontSize: "14px",
fontWeight: "700",
},
},
{
_id: "actions-4",
label: "Payments and Transfers",
style: {
fontSize: "17px",
fontWeight: "800",
},
},
{
_id: "actions-5",
label: "Security and Fraud",
style: {
fontSize: "12px",
fontWeight: "light",
},
},
{
_id: "actions-6",
label: "General Inquiries",
style: {
fontSize: "14px",
fontWeight: "600",
},
},
{
_id: "actions-7",
label: "Other",
style: {
fontSize: "10px",
fontWeight: "light",
},
},
],
topics: [
// El ID del trend debe ser generado para usarse como key en el mapeo. IMPORTANTE: propiedad 'style' define como se muestra la palabra
{
\_id: "trend-1",
label: "Fees and Charges",
style: {
fontSize: "22px",
},
},
{
\_id: "trend-2",
label: "Service Quality",
style: {
fontSize: "12px",
fontWeight: "light",
},
},
{
\_id: "trend-3",
label: "Product and Feature Suitability",
style: {
fontSize: "17px",
fontWeight: "800",
},
},

      {
        _id: "trend-4",
        label: "Security and Privacy",
        style: {
          fontSize: "14px",
          fontWeight: "700",
        },
      },

      {
        _id: "trend-5",
        label: "Communication and Relationship",
        style: {
          fontSize: "11px",
          fontWeight: "light",
        },
      },

      {
        _id: "trend-6",
        label: "Complaint Resolution",
        style: {
          fontSize: "20px",
          fontWeight: "600",
        },
      },
    ],
    moods: [
      // El ID del mood debe ser generado para usarse como key en el mapeo
      {
        _id: "mood-1",
        label: "Angry",
        percentage: 2,
        exceeded: false,
      },
      {
        _id: "mood-2",
        label: "Unhappy",
        exceeded: false,
        percentage: 14,
      },
      {
        _id: "mood-3",
        exceeded: true, // Para mostrar en amarillo el mood que ha sobrepasado el limite
        percentage: 58,
        label: "Indifferent",
      },
      {
        _id: "mood-4",
        label: "Happy",
        percentage: 40,
        exceeded: false
      },
      {
        _id: "mood-5",
        label: "Ecstatic",
        percentage: 5,
        exceeded: false
      },
    ],
    stats: [
       // El ID del stat debe ser generado para usarse como key en el mapeo
       // status high muestra la flecha hacia arriba y low hacia abajo
      {
        _id: "stat-1",
        label: "Response Time",
        ai: {
          status: "high",
          label: "1 min",
        },
        user: {
          status: "low",
          label: "2 min",
        },
      },
      {
        _id: "stat-2",
        label: "Response Quality",
        ai: {
          status: "low",
          label: "Low",
        },
        user: {
          status: "high",
          label: "High",
        },
      },
      {
        _id: "stat-3",
        label: "Hallucinations",
        ai: {
          status: "low",
          label: "500",
        },
        user: {
          status: "low",
          label: "600",
        },
      },
      {
        _id: "stat-4",
        label: "Abandoned",
        ai: {
          status: "low",
          label: "300",
        },
        user: {
          status: "high",
          label: "500",
        },
      },
      {
        _id: "stat-5",
        label: "Completions",
        ai: {
          status: "low",
          label: "500",
        },
        user: {
          status: "high",
          label: "600",
        },
      },
    ],

},
};
