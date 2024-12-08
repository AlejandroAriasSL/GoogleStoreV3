document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll(".left-section__bubble__img");
    const centerImage = document.querySelector(".center-section__img");
    thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
      centerImage.src = thumbnail.src; // Actualizar la imagen principal
});
});

fetch('../../layouts/nav-bar.html')
      .then(response => {
          if (!response.ok) {
              throw new Error("Error al cargar el archivo: " + response.status);
          }
          return response.text();
      })
      .then(data => {
          document.getElementById("includeHeader").innerHTML = data;
      })
      .catch(error => {
          console.error(error);
      });

});


fetch('/src/views/img')
      .then(response => {
          if (!response.ok) {
              throw new Error("Error al cargar el archivo: " + response.status);
          }
          return response.text();
      })
      .then(data => {
          document.getElementById("includeHeader").innerHTML = data;
      })
      .catch(error => {
          console.error(error);
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
   