let imagens = ['img/relogio1.webp', 'img/relogio2.jpg', 'img/relogio3.webp'];
let Index = 0;

let time = 3000;

function slideShow() {
  document.getElementById('image3').src = imagens[Index];

  Index++;

  if (Index == imagens.length) {
    Index = 0;
  }
  
  setTimeout('slideShow()', time);
}

slideShow();