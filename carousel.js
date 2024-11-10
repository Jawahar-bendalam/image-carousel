const images = [
  { src: "https://picsum.photos/id/237/200/300", alt: "Image 1" },
  { src: "https://picsum.photos/seed/picsum/200/300", alt: "Image 2" },
  { src: "https://picsum.photos/200/300?grayscale", alt: "Image 3" },
  { src: "https://picsum.photos/200/300/?blur", alt: "Image 4" },
];

let currentIndex = 0;

const imageContainer = document.getElementById("image-container");
imageContainer.innerHTML = `<img src="${images[currentIndex].src}" alt="${images[currentIndex].alt}">`;

function updateImage() {
  imageContainer.innerHTML = `<img src="${images[currentIndex].src}" alt="${images[currentIndex].alt}">`;
}

function goToPrevImg() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

function goToNextImg() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}
