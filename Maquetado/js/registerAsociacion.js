function validarRegistro(){
    var nombre = document.getElementById('Nombre').value;
    var mail = document.getElementById('email').value;
    var numTel = document.getElementById('telefono').value;
    var contrasena = document.getElementById('password').value;
    var Ccontrasena = document.getElementById('Cpassword').value;
    if(nombre=="" || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)==false || isNaN(numTel)==true || contrasena=="" || Ccontrasena=="" || Ccontrasena!=contrasena){
        alert("Porfavor rellena todos los campos correctamente");
        return false;
    }else{
        window.location.href = "crearPedAsocioacion.html"
    }
}