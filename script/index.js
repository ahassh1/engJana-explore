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
      <button class="btn btn-outline btn-primary"><i class="fa-solid fa-book"></i>Lesson- ${lesson.level_no}</button>
    `;
    //4. append into container (appendChild)
    levelContainer.appendChild(btnDiv);
  }
};
