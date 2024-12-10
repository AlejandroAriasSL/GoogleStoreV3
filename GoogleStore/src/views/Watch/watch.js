document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos las miniaturas (burbujas) y la imagen principal
  const thumbnails = document.querySelectorAll(".left-section__bubbles__img");
  const centerImage = document.querySelector(".left-section__img");

  // Evento para cambiar la imagen principal al hacer clic en las miniaturas
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
      centerImage.src = thumbnail.src; // Actualizar la imagen principal
    });
  });

  // Seleccionamos todos los botones de colores
  const colorOptions = document.querySelectorAll('.right-section__colors__options');

  // Asociamos colores con imágenes principales y burbujas
  const imageMap = {
    dark: {
      center: '/GoogleStore/src/views/img/FitbitInspire3Negro1.jpg', // Imagen principal para color oscuro

    },
    light: {
      center: '/GoogleStore/src/views/img/FitbitInspire3Rosa1.jpg', // Imagen principal para color claro

    },
    warm: {
      center: '/GoogleStore/src/views/img/FitbitInspire3Naranja1.jpg', // Imagen principal para color cálido

    },
  };

  // Añadimos el evento click a cada botón de color
  colorOptions.forEach(option => {
    option.addEventListener('click', () => {
      const color = option.getAttribute('data-color'); // Obtenemos el color seleccionado
      const newImageSrc = imageMap[color].center; // Imagen principal para ese color
      // Cambiamos la imagen principal
      centerImage.src = newImageSrc;
    });
  });

  const buttons = document.querySelectorAll(".colors-section__button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Quitar la clase "active" de todos los botones
        buttons.forEach(btn => btn.classList.remove("active"));
        
        // Añadir la clase "active" al botón presionado
        button.classList.add("active");
    });
});



  const form = document.getElementById('postalCodeForm');                        // Añadimos un evento 'submit' al formulario
  form.addEventListener('submit', (event) => {
    // Evitamos el comportamiento predeterminado del formulario (recargar la página)
    event.preventDefault();                            // Obtenemos el valor del código postal
    const postalCode = document.getElementById('postalCode').value;                            // Validamos o procesamos el código postal
    if (postalCode.trim() === '') {
        document.getElementById('output').textContent = 'Por favor, ingresa un código postal.';
    }
});
});

