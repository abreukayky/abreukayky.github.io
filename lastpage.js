let card = document.getElementById("card");

// Exibir a mensagem caso seja selecionado o 'sim'
document.querySelector("#yes").addEventListener("click", function () {
  let question = document.getElementById("question");
  let message = document.getElementById("answer");

  card.style.backgroundImage =
    "url('https://img1.picmix.com/output/stamp/normal/5/1/0/1/1171015_f458c.gif')";
  question.style.display = "none";
  message.style.display = "flex";
});

document.querySelector("#no").addEventListener("click", function () {
  const card = document.querySelector(".card"); // Seleciona o card

  
  const cardRect = card.getBoundingClientRect();
  const buttonWidth = this.offsetWidth;
  const buttonHeight = this.offsetHeight;

  
  const maxX = cardRect.width - buttonWidth;
  const maxY = cardRect.height - buttonHeight;

  
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  
  this.style.position = "absolute";
  this.style.top = `${randomY}px`;
  this.style.left = `${randomX}px`;
});



let contadorNao = 0;

    const botaoNao = document.getElementById("no");
    const botaoSim = document.getElementById("yes");

    botaoNao.addEventListener("click", () => {
      contadorNao++;
      if (contadorNao >= 3) {
        botaoSim.style.display = "inline"; // Torna o botão "Sim" visível
      }
    });
