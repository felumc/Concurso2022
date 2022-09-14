var obj;
var numobj;
var descripcion;


function enviar(){
    obj = document.getElementById('NombreObj').value;
    numobj = document.getElementById('numeroObjetos').value;
    descripcion = document.getElementById('descripcion').value;

    localStorage.setItem('obj', obj);
    localStorage.setItem('numobj', numobj);
    localStorage.setItem('descripcion', descripcion);
}

function crearSolicitud(){
    var newDiv = document.createElement('div');
    newDiv.className = 'tablas';
    var newDiv2 = document.createElement('div');
    newDiv2.className = 'TablaHeader';
    newDiv.appendChild(newDiv2);

    var titulo = document.createElement('h2');
    titulo.className = 'TituloTabla';
    titulo.style = 'text-aling: center;';
    titulo.textContent = 'obj';
    var descrip = document.createElement('h3');
    descrip.textContent = 'descripcion';
    newDiv2.appendChild(titulo);
    newDiv2.appendChild(descrip);

    var contTabla = document.createElement('div');
    contTabla.className = 'contenidoTabla';
    contTabla.style = 'text-aling: left;';
    var fecha = document.createElement('p');
    fecha.textContent = 'Fecha de publicación';
    var donar = document.createElement('button');
    donar.textContent = 'Donar';
    contTabla.appendChild(fecha);
    contTabla.appendChild(donar);

    newDiv.appendChild(contTabla);

}