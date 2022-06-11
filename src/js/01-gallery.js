// Add imports above this line
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

galleryItems.forEach((galleryItem) => {
  galleryContainer.insertAdjacentHTML(
    "beforeend",
    `    
      <a class="gallery__link"
       href="${galleryItem.original}"            
       >
        <img
          class="gallery__image"
          src=${galleryItem.preview}
          data-source=${galleryItem.original}                    
          alt="${galleryItem.description}"
        />
      </a>
    `
  );
}); 

var lightbox = new SimpleLightbox('.gallery a', 
   {maxZoom: 3,
    captions: true,
    captionSelector: "img",
    captionType: "attr",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,});


