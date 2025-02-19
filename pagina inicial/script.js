document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  const nextButton = document.getElementById("nextButton");

  // Quando o vídeo terminar, habilite o botão
  video.addEventListener("ended", function () {
    nextButton.disabled = false;
  });

  // Adicionar funcionalidade ao botão para ir para a próxima página
  nextButton.addEventListener("click", function () {
    window.location.href = "slide2.html";
  });
});


