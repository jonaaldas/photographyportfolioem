const overlay = document.querySelector(".overlay");
const overlayimg = document.querySelector("img");
const overlayClose = document.querySelector('.close');
const img__cont = document.querySelectorAll('.image-container'); 

function show(e){
  const src = e.currentTarget.querySelector('img').src;
  overlayimg.src = src;
  overlay.classList.add('open');
}

function close() {
  overlay.classList.remove('open');
}

img__cont.forEach(img => img.addEventListener("click", show));
overlayClose.addEventListener('click', close);

