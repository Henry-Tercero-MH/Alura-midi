function playSonido(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");
const colores = [
  "#FF5733",
  "#33FF57",
  "#3366FF",
  "#FF33FF",
  "#FFFF33",
  "#33FFFF",
  "#FF5733",
  "#33FF57",
  "#3366FF",
]; // Lista de colores

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  // Cambiado <= a <
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#sonido_${instrumento}`;
  console.log(idAudio);

  tecla.onclick = function () {
    playSonido(idAudio);
    // Obtener un índice aleatorio dentro del rango de colores
    const indiceColor = Math.floor(Math.random() * colores.length);
    // Aplicar el color aleatorio al botón
    tecla.style.backgroundColor = colores[indiceColor];
  };

  tecla.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("activa");
    }
  };

  tecla.onkeyup = function () {
    tecla.classList.remove("activa");
  };
}
