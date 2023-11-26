let imagens = ['img/bolsa1.avif', 'img/bolsa2.png', 'img/bolsa3.avif', 'img/bolsa4.avif'];
let Index = 0;

let time = 3000;

function slideShow() {
  document.getElementById('image1').src = imagens[Index];

  Index++;

  if (Index == imagens.length) {
    Index = 0;
  }
  
  setTimeout('slideShow()', time);
}

slideShow();


