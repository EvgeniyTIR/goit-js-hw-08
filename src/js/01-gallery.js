// Add imports above this line
// Описан в документации
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

    CreateGalleryItems(galleryItems);

    function CreateGalleryItems(obj){
      const gallery = [];

      for (const el of obj) {
        const itemConteiner = document.createElement('div')
        itemConteiner.classList ='gallery__item';

        const itemLink = document.createElement('a');
        itemLink.classList ='gallery__link';
        itemLink.href = el.original;

        const itemImg = document.createElement('img');
        itemImg.src = el.preview;
        itemImg.dataset.source = el.original;
        itemImg.alt = el.description;
        itemImg.classList = 'gallery__image';

        itemConteiner.appendChild(itemLink);  
        itemLink.appendChild(itemImg); 
        
        gallery.push(itemConteiner);       
      }; 
      galleryContainer.append(...gallery);   
    };


function OnImageClick(evt) {  
    evt.preventDefault();
    if(evt.target.nodeName !== 'IMG'){
        return 
        
    }else{     
    window.removeEventListener("keydown", onEscKeyPress);      

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)
   instance.show()

   window.addEventListener("keydown", onEscKeyPress);

   function onEscKeyPress(evt){
    if (evt.code !== "Escape") {
      return;   
    }
    console.log('close window')
    instance.close();
    window.removeEventListener("keydown", onEscKeyPress);
      };
    };    
  };

  galleryContainer.addEventListener('click', OnImageClick); 

// galleryItems.forEach((galleryItem) => {
//   galleryContainer.insertAdjacentHTML(
//     "beforeend",
//     `
//     <div class="gallery__item">
//       <a class="gallery__link" href="large-image.jpg">
//         <img
//           class="gallery__image"
//           src=${galleryItem.preview}
//           data-source=${galleryItem.original}
//           alt=${galleryItem.description}
//         />
//       </a>
//     </div>`
//   );
// });
// galleryContainer.addEventListener("click", (e) => {
//   e.preventDefault();
//   if (e.target.nodeName !== "IMG") {
//     return;
//   }
//   const instance = basicLightbox.create(`
//     <img src=${e.target.dataset.source} width="800" height="600">
// `);
//   instance.show();

//   window.addEventListener("keydown", (e) => {
//     if (e.code !== "Escape") {
//       return;
//     }
//     instance.close();
//   });
// });
console.log(galleryItems);
