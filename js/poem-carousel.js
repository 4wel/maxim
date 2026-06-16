let currentIndex = 0;

const title1 = document.getElementById("poemTitle1");
const text1 = document.getElementById("poemText1");
const title2 = document.getElementById("poemTitle2");
const text2 = document.getElementById("poemText2");

function renderPoems() {
  const poem1 = poems[currentIndex];
  const poem2 = poems[currentIndex + 1] || poems[0];

  title1.textContent = poem1.title;
  text1.textContent = poem1.text;

  title2.textContent = poem2.title;
  text2.textContent = poem2.text;
}

document.getElementById("nextPoems").addEventListener("click", () => {
  currentIndex = (currentIndex + 2) % poems.length;
  renderPoems();
});

document.getElementById("prevPoems").addEventListener("click", () => {
  currentIndex = currentIndex - 2;
  if (currentIndex < 0) {
    currentIndex = poems.length - 2;
  }
  renderPoems();
});

renderPoems();