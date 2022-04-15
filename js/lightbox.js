const imagenes = document.querySelectorAll(".img-galeria");
const imagenesLigth = document.querySelector(".agregar-imagen");
const contenedorLight = document.querySelector(".imagen-light");
const hamburger1 = document.querySelector(".hamburger");

imagenes.forEach((imagen) => {
  imagen.addEventListener("click", () => {
    showImage(imagen.getAttribute("src"));
  });
});

contenedorLight.addEventListener("click", (e) => {
  if (e.target !== imagenesLigth) {
    contenedorLight.classList.toggle("show");
    imagenesLigth.classList.toggle("showImage");
    hamburger1.style.opacity = "1";
  }
});

const showImage = (imagen) => {
  imagenesLigth.src = imagen;
  contenedorLight.classList.toggle("show");
  imagenesLigth.classList.toggle("showImage");
  hamburger1.style.opacity = "0";
};
