//variables

const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const ocupantesV = document.querySelector('#ocupantes');

//contenedor para resultados
const resultado=document.querySelector('#resultado');


//obtiene el año actual
const max=new Date().getFullYear();
const min= max-10;

//generar un objeto con la busqueda
const datosBusqueda={
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:'',
    ocupantesOb:'',

}

//eventos
document.addEventListener('DOMContentLoaded', () =>{
    mostrarAutos(autos); //muestra los datos al cargar

    //llena el combobox con los años
    llenarSelect()

})

// Event listener para los select de búsqueda
marca.addEventListener('change',e=>{
    datosBusqueda.marca=e.target.value;
    filtrarAuto();
})

year.addEventListener('change',e=>{
    datosBusqueda.year=e.target.value;
    filtrarAuto();
})

minimo.addEventListener('change',e=>{
    datosBusqueda.minimo=e.target.value;
    filtrarAuto();
})

maximo.addEventListener('change',e=>{
    datosBusqueda.maximo=e.target.value;
    filtrarAuto();
})

puertas.addEventListener('change',e=>{
    datosBusqueda.puertas=e.target.value;
    filtrarAuto();
})

transmision.addEventListener('change',e=>{
    datosBusqueda.transmision=e.target.value;
    filtrarAuto();
})

color.addEventListener('change',e=>{
    datosBusqueda.color=e.target.value;
    filtrarAuto();
})

ocupantesV.addEventListener('change',e=>{
    datosBusqueda.ocupantesOb=e.target.value;
    filtrarAuto();
})

//funciones
function mostrarAutos(autos){

    limpiartHTML();// elimina el HTML previo
    autos.forEach( auto=>{
        const {marca, modelo,  year, puertas, transmision, precio, color,ocupantes}=auto;
        const autoHTML=document.createElement('p');
        autoHTML.textContent=`
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}- Ocupantes: ${ocupantes}
        
        `;
        //insertar en el html
        resultado.appendChild(autoHTML)
    }

    )
}

function limpiartHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function llenarSelect(){
   for(let i=max; i>=min; i--){
       const opcion=document.createElement('option');
       opcion.value=i;
       opcion.textContent=i;
       year.appendChild(opcion); //agrega las opciones al select
       }
}

//Función que filtra en base a la busqueda
//funciones de alto nivel
function filtrarAuto(){
    const resultado=autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas)
    .filter(filtrarTransmision).filter(filtrarColor).filter(filtrarCapacidad)
    mostrarAutos(resultado);
    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
    // console.log(resultado);
}

function noResultado(){
    limpiartHTML();
    const noResultado=document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent='No hay resultados, Intente con otros datos';
    resultado.appendChild(noResultado)
}


function filtrarMarca(auto){
   const {marca}=datosBusqueda;
    if(marca){
        return auto.marca===marca;
   }
   return auto;
}

function filtrarYear(auto){
    const {year}=datosBusqueda;
    
     if(year){
         return auto.year=== parseInt(year);
    }
    return auto;
 }

 function filtrarMinimo(auto){
    const {minimo}=datosBusqueda;
    
    if(minimo){
        return auto.precio>= minimo;
   }
   return auto;
 }

 function filtrarMaximo(auto){
    const {maximo}=datosBusqueda;
    
    if(maximo){
        return auto.precio<= maximo;
   }
   return auto;
 }


 function filtrarPuertas(auto){
    const {puertas}=datosBusqueda;
    
    if(puertas){
        return auto.puertas=== parseInt(puertas);
   }
   return auto;
 }

 
 function filtrarTransmision(auto){
    const {transmision}=datosBusqueda;
    
    if(transmision){
        return auto.transmision=== transmision;
   }
   return auto;
 }

 function filtrarColor(auto){
    const {color}=datosBusqueda;
    
    if(color){
        return auto.color=== color;
   }
   return auto;
 }

 function filtrarCapacidad(auto){
    const {ocupantesOb}=datosBusqueda;
    
    if(ocupantesOb){
        return auto.ocupantes=== parseInt(ocupantesOb);
   
   }
   return auto;
 }
