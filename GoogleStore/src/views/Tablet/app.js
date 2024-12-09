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
    const colorOptions = document.querySelectorAll('.colors-section__button__color');
  
    // Asociamos colores con imágenes principales y burbujas
    const imageMap = {

      green: {
        center: '/GoogleStore/src/views/img/TabletGris.png', // Imagen principal para color verde
        bubbles: [
          '/GoogleStore/src/views/img/TabletGris.png', // Imagen 1 para burbuja
          '/GoogleStore/src/views/img/TabletGris2.png', // Imagen 2 para burbuja
          '/GoogleStore/src/views/img/TabletGris3.png', // Imagen 3 para burbuja
          '/GoogleStore/src/views/img/TabletGris4.png'
        ],
      },
      warm: {
        center: '/GoogleStore/src/views/img/Tablet.png', // Imagen principal para color claro
        bubbles: [
          '/GoogleStore/src/views/img/Tablet.png', // Imagen 1 para burbuja
          '/GoogleStore/src/views/img/Tablet2.png', // Imagen 2 para burbuja
          '/GoogleStore/src/views/img/Tablet3.png', // Imagen 3 para burbuja
          '/GoogleStore/src/views/img/Tablet4.png'
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
  
  