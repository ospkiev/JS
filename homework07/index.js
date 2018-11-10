'use strict'
/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];

let root = document.querySelector('#root');
  
function createPostCards(el) {
// div
  let div = document.createElement('div');
  div.classList.add('post');
  // img
  let img = document.createElement('img');
  img.setAttribute('src',`${el.img}`);
  img.classList.add('post__image');
  // title
  let h1 = document.createElement('h1');
  h1.textContent = `${el.title}`;
  h1.classList.add('post__title');
  // tetx
  let text = document.createElement('p');
  text.textContent = `${el.text}`;
  // link
  let link = document.createElement('a');
  link.setAttribute('href',`#`);
  link.textContent = `${el.link}`;
  link.classList.add('button');
  link.classList.add('button:hover')
  div.append(img,h1,text,link);
  
  return div;
}  

function createCards(arr){
  let newArr=[];
  for ( let i of arr){
    newArr = createPostCards(i);
    root.append(newArr);
  }
}
createCards(posts);

 