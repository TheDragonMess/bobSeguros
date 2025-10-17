// Constants
export const POPULAR_WORDS = "popular-words";
export const UNFAMILIAR_WORDS = "unfamiliar-words";
export const FREQUENTLY_ASKED_QUESTIONS = "frequently-asked-questions";

const faqs = [
  {
    label: "Preguntas Frecuentes",
    value: FREQUENTLY_ASKED_QUESTIONS,
  },
  {
    value: POPULAR_WORDS,
    label: "Frases o Palabras Populares",
  },
  {
    value: UNFAMILIAR_WORDS,
    label: "Palabras o frases no entendidas por el Asistente",
  },
];

export default faqs;
