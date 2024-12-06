document.addEventListener('DOMContentLoaded', () => {
  // Seleccionamos las miniaturas (burbujas) y la imagen principal
  const thumbnails = document.querySelectorAll(".left-section__bubble__img");
  const centerImage = document.querySelector(".center-section__img");

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
      center: '/src/views/img/FitbitNegro1.png', // Imagen principal para color oscuro
      bubbles: [
        '/src/views/img/FitbitNegro1.png', // Imagen 1 para burbuja
        '/src/views/img/FitbitNegro2.png', // Imagen 2 para burbuja
        '/src/views/img/FitbitNegro3.png', // Imagen 3 para burbuja
      ],
    },
    light: {
      center: '/src/views/img/FitbitPorcelana1.png', // Imagen principal para color claro
      bubbles: [
        '/src/views/img/FitbitPorcelana1.png', // Imagen 1 para burbuja
        '/src/views/img/FitbitPorcelana2.png', // Imagen 2 para burbuja
        '/src/views/img/FitbitPorcelana3.png', // Imagen 3 para burbuja
      ],
    },
    warm: {
      center: '/src/views/img/FitbitNaranja1.png', // Imagen principal para color cálido
      bubbles: [
        '/src/views/img/FitbitNaranja1.png', // Imagen 1 para burbuja
        '/src/views/img/FitbitNaranja2.png', // Imagen 2 para burbuja
        '/src/views/img/FitbitNaranja3.png', // Imagen 3 para burbuja
      ],
    },
  };

  // Añadimos el evento click a cada botón de color
  colorOptions.forEach(option => {
    option.addEventListener('click', () => {
      const color = option.getAttribute('data-color'); // Obtenemos el color seleccionado
      const newImageSrc = imageMap[color].center; // Imagen principal para ese color
      const bubbleImages = imageMap[color].bubbles; // Imágenes de burbujas para ese color

      // Cambiamos la imagen principal
      centerImage.src = newImageSrc;

      // Actualizamos las miniaturas (burbujas)
      thumbnails.forEach((thumbnail, index) => {
        if (bubbleImages[index]) { // Evitamos errores si hay menos imágenes que burbujas
          thumbnail.src = bubbleImages[index];
        }
      });
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