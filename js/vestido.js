let imagens = ['img/vestido1.webp', 'img/vestido2.webp', 'img/vestido3.webp', 'img/vestido4.webp'];
let Index = 0;

let time = 3000;

function slideShow() {
  document.getElementById('image4').src = imagens[Index];

  Index++;

  if (Index == imagens.length) {
    Index = 0;
  }
  
  setTimeout('slideShow()', time);
}

slideShow();