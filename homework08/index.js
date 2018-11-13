'use strict'

/*
  Создайте компонент галлереи изображений следующего вида.
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
    { preview: './img/abstract-abstract-painting-art-1193743.jpg', fullview: './img/abstract-abstract-painting-art-1193743.jpg', alt: "alt text 1" },
    { preview: './img/active-exercise-fit-1401796.jpg', fullview: './img/active-exercise-fit-1401796.jpg', alt: "alt text 2" },
    { preview: './img/break-car-couple-196666.jpg', fullview: './img/break-car-couple-196666.jpg', alt: "alt text 3" },
    { preview: './img/hobby-leisure-man-67386.jpg', fullview: './img/hobby-leisure-man-67386.jpg', alt: "alt text 4" },
    { preview: './img/apartment-architecture-balcony-347141.jpg', fullview: './img/fullview-5.jpeg', alt: "alt text 5" },
    { preview: './img/architectural-design-architecture-book-shelves-1319855.jpg', fullview: './img/architectural-design-architecture-book-shelves-1319855.jpg', alt: "alt text 6" },
    { preview: './img/buffet-chicken-cooking-5938.jpg', fullview: './img/buffet-chicken-cooking-5938.jpg', alt: "alt text 2" },
    { preview: './img/apartment-architectural-design-architecture-434139.jpg', fullview: './img/apartment-architectural-design-architecture-434139.jpg', alt: "alt text 2" },
  ];

let imageGallery = document.querySelector('.image-gallery');
let imgBox = document.querySelector('.img_box')
let fullImg = document.querySelector('.full_img');  
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');
let img4 = document.querySelector('.img4');
let img5 = document.querySelector('.img5');
let img6 = document.querySelector('.img6');

img1.setAttribute('src',`${randomImg()}`);
img2.setAttribute('src',`${randomImg()}`);
img3.setAttribute('src',`${randomImg()}`);
img4.setAttribute('src',`${randomImg()}`);
img5.setAttribute('src',`${randomImg()}`);
img6.setAttribute('src',`${randomImg()}`);

function randomImg(){
let arr =[];
for (let i of galleryItems){
    arr.push(i.preview) ;  
}
let a = Math.floor(Math.random()*8);
return arr[a];
}

function start(){
fullImg.setAttribute('src',img1.getAttribute('src'));
}

function changeFullview() {
  fullImg.setAttribute('src',event.target.src);
  if(event.target.tagName === "IMG") {
    document.querySelectorAll('.preview img').forEach(x => x === event.target ? x.classList.add('img_box_click') : x.classList.remove('img_box_click'));
  }
}

imageGallery.addEventListener('click', changeFullview);
window.addEventListener('DOMContentLoaded', start);

