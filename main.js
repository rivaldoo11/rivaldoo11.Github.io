function login(){
    var user, pass;

    user = document.getElementById("usuari").value;
    pass = document.getElementById("contraseñ").value;

    if(user == "miguel" && pass == "12345"){

        window.location= "pagina.html";

    }
    else{
        alert("usuario incorrecto")
    }
    
}