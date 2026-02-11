const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response
    .then((res) => res.json()) //promise of json data
    .then((json) => displayLessons(json.data));
};
loadLessons();

const displayLessons = (lessons) => {
  // 1. get the container
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";
  //2. get into every lessons
  for (let lesson of lessons) {
    //3. create element (createElement)
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
      <button onClick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book"></i>Lesson- ${lesson.level_no}</button>
    `;
    //4. append into container (appendChild)
    levelContainer.appendChild(btnDiv);
  }
};

const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data.data));
};

const displayLevelWord = (words) => {
  // get the container
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";
  //  get into every lessons
  words.forEach((word) => {
    // create element (createElement)
    const card = document.createElement("div");
    card.innerHTML = `
    <p>card is done</p>
    `;
    // append into container (appendChild)
    wordContainer.appendChild(card);
  });
};
