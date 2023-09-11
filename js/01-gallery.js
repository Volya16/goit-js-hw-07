import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const markup = createMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", markup);
galleryList.addEventListener("click", handleClick);

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

function handleClick(event) {
  event.preventDefault();
  if (event.target.nodeName === "UL") {
    return;
  } 
  const targetElement = event.target.closest('.gallery__item');
  const dataPreview = event.target.dataset.source;
  const imgDesc = event.target.alt;

  const instance = basicLightbox.create(`
    <div class="modal">
      <img src=${dataPreview} alt=${imgDesc}/>
    </div>
  `)
  instance.show();
}

