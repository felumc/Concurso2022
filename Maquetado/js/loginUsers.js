function validarLogin(){
    var mail = document.getElementById('email').value;
    var contrasena = document.getElementById('password').value;
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)==false  || contrasena==""){
        alert("Porfavor rellena todos los campos correctamente");
        return false;
    }else{
        window.location.href = "servicios.html"
    }
}