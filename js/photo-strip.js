const photoStrip = document.getElementById("photoStrip");
const nextPhotos = document.getElementById("nextPhotos");
const prevPhotos = document.getElementById("prevPhotos");

function scrollPhotos(direction) {
  const slide = photoStrip.querySelector(".photo-slide");

  if (!slide) return;

  const gap = 18;
  const scrollAmount = slide.offsetWidth + gap;

  photoStrip.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

nextPhotos.addEventListener("click", () => {
  scrollPhotos(1);
});

prevPhotos.addEventListener("click", () => {
  scrollPhotos(-1);
});