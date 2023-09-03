import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);

container.insertAdjacentHTML("beforeend", markup);
container.addEventListener("click", handleClick);

function createMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`}).join("")
}

