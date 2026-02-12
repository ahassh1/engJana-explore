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
    <button id="lesson-btn-${lesson.level_no}" onClick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn"><i class="fa-solid fa-book"></i>Lesson- ${lesson.level_no}</button>
    `;
    //4. append into container (appendChild)
    levelContainer.appendChild(btnDiv);
  }
};

// fetch function
// then another function
// and get the container (getElementById)
// get into very element (loop)
// create element (createElement)
// append into container (appendChild)

const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      const clickBtn = document.getElementById(`lesson-btn-${id}`);
      clickBtn.classList.add("active");
      displayLevelWord(data.data);
    });
};

const displayLevelWord = (words) => {
  // get the container
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

  if (words.length === 0) {
    wordContainer.innerHTML = `
      <div class="bg-gray-100 text-center col-span-full">
      <img class="mx-auto" src="./assets/alert-error.png" alt="" />
        <p class="text-gray-500 mb-1">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h1 class="text-gray-900 font-semibold text-3xl">
          নেক্সট Lesson এ যান
        </h1>
      </div>
    `;
    return;
  }
  //  get into every lessons
  words.forEach((word) => {
    // create element (createElement)
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="bg-white rounded-md shadow-lg p-7 md:p-10 lg:p-13  text-center space-y-1.5 flex-1">
        <h1 class="font-bold text-[17px] md:text-2xl text-gray-900">${word.word ? word.word : "শব্দ পাওয়া যায়নি"}</h1>
        <h5 class="font-semibold text-gray-700">Meaning /Pronounciation</h5>
        <h1 class="font-bold text-[16px] md:text-[20px] text-gray-800">"${word.meaning ? word.meaning : "দুঃখিত, কোনো ফলাফল পাওয়া যায়নি"}/ ${word.pronunciation ? word.pronunciation : "অনুসন্ধানকৃত Pronunciation পাওয়া যায়নি"}"</h1>
        <div class="flex justify-between items-center">
          <button class="btn bg-[1A91FF10] hover:bg-[1A91FF90]">
            <i class="fa-solid fa-circle-info"></i>
          </button>
          <button class="btn bg-[1A91FF10] hover:bg-[1A91FF90]">
            <i class="fa-solid fa-volume-high"></i>
          </button>
        </div>
      </div>
    `;
    // append into container (appendChild)
    wordContainer.appendChild(card);
  });
};

const removeActive = () => {
  const lessonButtons = document.querySelectorAll(".lesson-btn");
  lessonButtons.forEach((btn) => btn.classList.remove("active"));
};
