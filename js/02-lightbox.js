import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryWrapper = document.querySelector(".gallery");

const galleryList = createGallery(galleryItems);

function createGallery(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`
    )
    .join(" ");
}

galleryWrapper.insertAdjacentHTML("beforeend", galleryList);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
