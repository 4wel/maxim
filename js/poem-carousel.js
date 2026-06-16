let currentIndex = 0;

const title = document.getElementById("poemTitle");
const text = document.getElementById("poemText");
const counter = document.getElementById("poemCounter");

function renderPoems() {
  if (!poems || poems.length === 0) {
    title.textContent = "Вірші відсутні";
    text.textContent = "";
    counter.textContent = "";
    return;
  }

  const poem = poems[currentIndex];

  title.textContent = poem.title;
  text.textContent = poem.text;

  counter.textContent =
     `${currentIndex + 1} / ${poems.length}`;
}

document.getElementById("nextPoems").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % poems.length;
  renderPoems();
  scrollToPoem();
});

document.getElementById("prevPoems").addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = poems.length - 1;
  }
  renderPoems();
  scrollToPoem();
});

document.getElementById("randomPoem").addEventListener("click", () => {
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * poems.length);
  } while (randomIndex === currentIndex && poems.length > 1);

  currentIndex = randomIndex;
  renderPoems();
  scrollToPoem();
});

function scrollToPoem() {
  const poemCard = document.getElementById("poemCard");

  const y =
    poemCard.getBoundingClientRect().top +
    window.pageYOffset -
    90;

  window.scrollTo({
    top: y,
    behavior: "smooth"
  });
}

renderPoems();