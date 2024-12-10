document.addEventListener('DOMContentLoaded', () => {
  let contador = null;

  // Usar un setInterval para verificar si el elemento contador existe
  const checkContadorInterval = setInterval(function() {
    contador = document.getElementById("contador");

    if (contador) {

      contador.hidden = true;
      // Si se encuentra el elemento, llamar a la función
      actualizarContador();
      clearInterval(checkContadorInterval); // Detener la verificación una vez encontrado
    }
  }, 100);
  
  
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

const colorButtons = document.querySelectorAll(".colors-section__button");
const shippingButton = document.querySelector(".right-section__shipping__cart__button");

let producto = 0;

function enableShippingButton() {
  // Habilitar el botón de "Add to Cart"
  shippingButton.removeAttribute("disabled");
}

function actualizarContador() {
shippingButton.addEventListener('click', () => {
producto++;
if (producto > 0) {
  contador.hidden = false;
}
contador.textContent = producto;
});
}

colorButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Eliminar la clase 'selected' de todos los botones de color
        colorButtons.forEach(btn => btn.classList.remove("selected"));

        // Agregar la clase 'selected' al botón que fue clicado
        button.classList.add("selected");

        // Habilitar los botones de almacenamiento
        enableShippingButton();
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

