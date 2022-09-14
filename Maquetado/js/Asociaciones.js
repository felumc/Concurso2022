var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024); 

db.transaction(function (tx) { 
   tx.executeSql('CREATE TABLE IF NOT EXISTS CRUD (id unique, name,apellido)'); 
  
}); 

var id=0,Nombre,Apepat;
function Agregar(){
    id++;
    Nombre=document.getElementById("nombre").value;
    Apepat=document.getElementById("apellido").value;

    db.transaction(function (tx) { 
         
        tx.executeSql('INSERT INTO CRUD (id,name,apellido) VALUES (?,?,?)',[id],[Nombre],[Apepat]); 
       
     }); 




    
}


function Agregar_1(){


   

    listNode = document.getElementById('list'),
    liNode = document.createElement("LI"),
    txtNode = document.createTextNode(txtVal);

    liNode.appendChild(txtNode);
    listNode.appendChild(liNode);
    

    /*
    <li class="table-row">
    <div class="col col-1" data-label="Job Id">1</div>
    <div class="col col-2" data-label="Customer Name">Empresa</div>
    <div class="col col-3" data-label="Amount">Playeras</div>
    <div class="col col-4" data-label="Payment Status">10</div>
    </li>*/

    alert("hola");
}