const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");

let clickCount = 0;

noBtn.addEventListener("click", () => {
  clickCount += 1;

  // Obter os limites do card e do botão
  const card = document.querySelector(".card-large");
  const cardBounds = card.getBoundingClientRect();
  const noBtnBounds = noBtn.getBoundingClientRect();

  // Calcular posições aleatórias dentro do card
  const maxX = cardBounds.width - noBtnBounds.width - 10; // 10px de margem
  const maxY = cardBounds.height - noBtnBounds.height - 10; // 10px de margem
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  // Definir as novas posições do botão "Não"
  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  // Mostrar o botão "Sim" após 3 cliques no botão "Não"
  if (clickCount >= 3) {
    yesBtn.classList.remove("hidden");
  }
});

yesBtn.addEventListener("click", () => {
  window.location.href = "lastpage.html";
});
