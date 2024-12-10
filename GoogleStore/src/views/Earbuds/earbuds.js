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
  }, 100); // Verificar cada 100ms

  
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
    blue: {
      center: '/GoogleStore/src/views/img/aur_azul_gen2.PNG', // Imagen principal para color rosa
      bubbles: [
        '/GoogleStore/src/views/img/aur_azul_gen2.PNG', // Imagen 1 para burbuja
        '/GoogleStore/src/views/img/azul_front.PNG', // Imagen 2 para burbuja
        '/GoogleStore/src/views/img/azul_side.PNG', // Imagen 3 para burbuja
        '/GoogleStore/src/views/img/azul_aur.PNG'
      ],
    },

    warm: {
      center: '/GoogleStore/src/views/img/aur_porcelana_gen2.PNG', // Imagen principal para color claro
      bubbles: [
        '/GoogleStore/src/views/img/aur_porcelana_gen2.PNG', 
        '/GoogleStore/src/views/img/porcelana_front.PNG',
        '/GoogleStore/src/views/img/porcelana_side.PNG', 
        '/GoogleStore/src/views/img/porcelana_aur.PNG'
      ],
    },
    obsidian: {
      center: '/GoogleStore/src/views/img/aur_negro_gen2.PNG', // Imagen principal para color negro
      bubbles: [
        '/GoogleStore/src/views/img/aur_negro_gen2.PNG', 
        '/GoogleStore/src/views/img/negro_front.PNG',
        '/GoogleStore/src/views/img/negro_side.PNG', 
        '/GoogleStore/src/views/img/negro_aur.PNG'
      ],
    },

    grey: {
      center: '/GoogleStore/src/views/img/aur_gris_gen.png', // Imagen principal para color claro
      bubbles: [
        '/GoogleStore/src/views/img/aur_gris_gen.png', 
        '/GoogleStore/src/views/img/gris_front.png',
        '/GoogleStore/src/views/img/gris_side.png', 
        '/GoogleStore/src/views/img/gris_aur.png'
      ],
    },
  

    green: {
      center: '/GoogleStore/src/views/img/aur_verde_gen.png', // Imagen principal para color verde
      bubbles: [
        '/GoogleStore/src/views/img/aur_verde_gen.png', // Imagen 1 para burbuja
        '/GoogleStore/src/views/img/verde_front.png', // Imagen 2 para burbuja
        '/GoogleStore/src/views/img/verde_side.png', // Imagen 3 para burbuja
        '/GoogleStore/src/views/img/verde_aur.png'
      ],
    },

    orange: {
      center: '/GoogleStore/src/views/img/aur_naranja_gen2.png', // Imagen principal para color negro
      bubbles: [
        '/GoogleStore/src/views/img/aur_naranja_gen2.png', 
        '/GoogleStore/src/views/img/naranja_front.PNG',
        '/GoogleStore/src/views/img/naranja_side.PNG', 
        '/GoogleStore/src/views/img/naranja_aur.PNG'
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
/*
const buttons = document.querySelectorAll(".colors-section__button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
      // Quitar la clase "active" de todos los botones
      buttons.forEach(btn => btn.classList.remove("active"));
      
      // Añadir la clase "active" al botón presionado
      button.classList.add("active");
  });
});
*/


const colorButtons = document.querySelectorAll(".right-section__colors__options");

// Seleccionar los botones de almacenamiento, el botón de envío y el precio
const shippingButton = document.querySelector(".right-section__shipping__cart__button");

let producto = 0;


// Función para habilitar el botón de envío
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


// Agregar un evento de clic a cada botón de colores
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

// Código postal
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
