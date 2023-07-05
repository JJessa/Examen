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
    
     