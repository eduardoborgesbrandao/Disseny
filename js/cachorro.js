let imagens = ['img/cachorro1.png', 'img/cachorro2.png'];
let Index = 0;

let time = 2000;

function slideShow() {
  document.getElementById('image2').src = imagens[Index];

  Index++;

  if (Index == imagens.length) {
    Index = 0;
  }
  
  setTimeout('slideShow()', time);
}

slideShow();