
//Función para habilitar el boton una vez aceptado el checkbox en el formulairo
function habilitarBoton() {
    var checkbox = document.getElementById('checkbox');
    var boton = document.getElementById('boton');
  
    if (checkbox.checked) {
      boton.disabled = false;
    } else {
      boton.disabled = true;
    }
  }


//Función para leer más en el parrafo de la home

let button_readMore = document.getElementById('button_readMore')
let hiddenText = document.getElementById('hiddenText')

button_readMore.addEventListener('click', toggleText);

function toggleText() {
  hiddenText.classList.toggle('show');

  if(hiddenText.classList.contains('show')) {
    button_readMore.innerHTML = 'Leer Menos';
  }else {
    button_readMore.innerHTML = 'Leer Más';
  }
}

//Función de mostrar fecha
function showDate() {
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const date = new Date();
    const day = days[date.getDay()];
    const dia = date.getDate();
    const hour = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    document.getElementById("fecha").innerHTML = `${day} ${dia} de ${month} del ${year} a las ${hour}:${minutes}`;
  }
  
  showDate();

  //Función de cambio de imagen en la home
  let image = document.querySelector(".imagen-home");

image.addEventListener('mouseover', changeImage);
image.addEventListener('mouseout', startImage);

function changeImage() {
    image.setAttribute('src', './images/personas_realidad_virtual.jpg');
    image.setAttribute('alt', 'personas en una sala de museo con gafas de realidad virtual');
 }

 function startImage() {
    image.setAttribute('src', './images/hombre_jugando_realidad_virtual.jpg');
    image.setAttribute('alt', 'persona jugandocon los mandos y gafas de realidad virtual');
}