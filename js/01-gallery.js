import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryWrapper = document.querySelector(".gallery");

const galleryList = createGallery(galleryItems);

function createGallery(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
     <a class="gallery__link" href="${original}">    <img
           class="gallery__image"
          src="${preview}"
           data-source="${original}"
           alt="${description}"
         />
       </a>
  </li>`
    )
    .join(" ");
}

galleryWrapper.insertAdjacentHTML("beforeend", galleryList);

galleryWrapper.addEventListener("click", onImgClick);

let instance = null;

function onImgClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  } else {
    const originalImg = evt.target.dataset.source;

    instance = basicLightbox.create(
      `<img src="${originalImg}" width="800" height="600">`,
      {
        onShow: () => document.addEventListener("keydown", onPressEsc),
        onClose: () => document.removeEventListener("keydown", onPressEsc),
      }
    );
    instance.show();
  }
}

function onPressEsc(evt) {
  if (evt.code !== "Escape") {
    return;
  }
  instance.close();
}
