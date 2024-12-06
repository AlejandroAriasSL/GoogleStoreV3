document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll(".left-section__bubble__img");
    const centerImage = document.querySelector(".center-section__img");
    thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
      centerImage.src = thumbnail.src; // Actualizar la imagen principal
});
});
});