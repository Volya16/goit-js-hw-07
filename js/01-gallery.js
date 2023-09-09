import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);

container.insertAdjacentHTML("beforeend", markup);
container.addEventListener("click", handleItemClick);

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

function handleItemClick(event) {
    if (event.target === event.currentTarget) {
        return;
    }
    const targetElement = event.target.closest(".gallery__item");
    event.preventDefault();

    const instance = basicLightbox.create(
        <div class="modal">
<img scr="${preview}" />
        </div>
    );
} 

// Pharao X Junior Textile 2.0 mottoradhandschuhe