let info=[];

function AnadirInfo(){

    let nombre=document.getElementById("nombre");
    let origen=document.getElementById("origen");
    let destino=document.getElementById("destino");
    let personas=document.getElementById("personas");
    let fecha=document.getElementById("fecha");
}

if(nombre && origen && destino && personas && fecha ){

    let destinomin=destino.tolowercase();

    let newObjet={
        nombre :nombre ,
        origen : origen ,
        destino :destinomin ,
        personas :personas ,
        fecha :fecha
    };

    info.push(newObjet);

    // limpio todos los imputs dentroi de la funcion para que queden vacios para la siguiente entrada
    // ya que tendiramos guardada la info en el array
    document.getElementById('nombre').value = '';
        document.getElementById('origen').value = '';
        document.getElementById('destino').value = '';
        document.getElementById('personas').value = '';
        document.getElementById('fecha').value = '';
}


let pedirInfo=document.getElementById("solicitarInfo");
// llamar a la funcion cada vez que se pinche en el boton de solicitar informacion 
pedirInfo.addEventListener('click' , AnadirInfo());


function filtrarSolicitudes() {
     let filtrado = "";
     for(let i = 0; i < info.length; i++){
         if(info[i].destino == "Canarias" || info[i].destino == "Mallorca" || info[i].destino == "Galicia"){
             filtrado += `nombre: ${info[i].nombre}
                         origen: ${info[i].origen}
                         destino: ${info[i].destino}
                         personas: ${personas}
                         fecha: ${info[i].fecha}`;
         }
         console.log(filtrado);
    
     }
}
let filtroOk = info.filter(newObjet => {
    return destinosPermitidos.includes(newObjet.destino);
});

let botonFiltrado = document.getElementById('botonFiltrado');
botonFiltrado.addEventListener('click', filtrarSolicitudes());