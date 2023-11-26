const image = document.querySelector('.image');

function resizeImage() {
  const windowWidth = window.innerWidth;
  if (windowWidth <= 800) {
    image.style.width = '50%';
  } else {
    image.style.width = '100%';
  }
}

resizeImage();

window.addEventListener('resize', resizeImage);