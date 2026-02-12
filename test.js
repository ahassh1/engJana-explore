const createElement = (arr) => {
  const htmlElemens = arr.map((el) => `<span class="btn">${el}</span>`);
  console.log(htmlElemens.join(" "));
};
const synonyms = [
  "hello ",
  "hi",
  "greetings",
  "salutations",
  "hey",
  "howdy",
  "welcome",
  "good day",
  "what's up",
  "yo",
];
createElement(synonyms);
