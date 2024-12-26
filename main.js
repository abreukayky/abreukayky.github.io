const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0; // Índice inicial

function updateCarousel() {
  const width = images[0].clientWidth; // Largura de cada imagem
  carouselImages.style.transform = `translateX(${-index * width}px)`; // Move o carrossel
}

// Evento de próximo botão
next.addEventListener('click', () => {
  index = (index + 1) % images.length; // Avança para a próxima imagem
  updateCarousel();
});

// Evento de botão anterior
prev.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length; // Volta para a imagem anterior
  updateCarousel();
});

// Atualiza o carrossel quando a janela é redimensionada
window.addEventListener('resize', updateCarousel);
