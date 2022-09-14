
function Donar(){
swal("Ingresa la cantidad de objetos a donar:", {
    content: "input",
  })
  .then((value) => {
    swal(`Cantidad Ingresada: ${value}`);
  });}