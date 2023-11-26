let imagens = ['img/camisa1.webp', 'img/camisa2.webp', 'img/camisa3.webp', 'img/camisa4.webp'];
let Index = 0;

let time = 3000;

function slideShow() {
  document.getElementById('image5').src = imagens[Index];

  Index++;

  if (Index == imagens.length) {
    Index = 0;
  }
  
  setTimeout('slideShow()', time);
}

slideShow();