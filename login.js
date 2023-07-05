document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
      
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
      
    
    if (username === "" || password === "") {

     alert("Estos campos son obligatorios");

    } else if (password.length<8){
        document.getElementById('warnings').innerHTML = "La contraseña debe tener al menos 8 caracteres"
        document.querySelector("#warnings").style.color = "red";
        document.querySelector("#warnings").style.border = "0.1rem solid red";
        document.querySelector("#warnings").style.padding = "0.5rem";

    } else {

     alert("¡Hola "  + username + " has iniciado sesión!");
     window.location.href = "index.html";
    }
     });

//Función que deja ver la contraseña cuando se clicka en la imagen del ojo
    
let image = document.querySelector("#image-eye");
let contrasena = document.querySelector("#password")

image.addEventListener('click', change);

function change() {
    if(contrasena.type == "password") {
        contrasena.type = "text";
        image.setAttribute('src','./images/ojoAbierto1.jpg');
    }else {
        contrasena.type = "password";
        image.setAttribute('src','./images/ojoCerrado1.jpg');
    }
}