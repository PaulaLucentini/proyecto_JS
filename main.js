
//primer entrega

for (let butaca = 1; butaca <= 1; butaca++) {
    let edad = Number(prompt("Ingrese su edad"));
    let nombre = prompt("Ingrese su nombre");
    let mensaje = `Hola ${nombre}`;
    alert(mensaje);
  
    if (edad >= 18) {
      let dni = Number(prompt("Ingrese su DNI"));
      alert(`Butaca #${butaca} DNI ${dni}`);
    } else {
      alert("Debe ser mayor de edad");
    }
  }
  alert("Vuelva a ingresar por más butacas");

//SEGUNDA ENTREGA - objetos, Arrays y Métodos - 

//OBJETO
const obras = [
  {id: 1, nombre:"Romeo y Julieta", precio: 500},
  {id: 2, nombre:"La divina Comedia", precio: 500},
  {id: 3, nombre:"La casa de Bernarda Alba", precio: 500},
  {id: 4, nombre:"La Celestina", precio: 500},
  {id: 5, nombre:"El fantasma de la ópera", precio: 1000},
  {id: 6, nombre:"Sueño de una noche de verano", precio:1000},
  {id: 7, nombre:"Don Juan Tenorio", precio:1000},
];

class ObrasNuevas {
    constructor(id, nombre, precio){
        this.id= id;
        this.nombre= nombre;
        this.precio= precio;
    }
};

const obra1= new ObrasNuevas(8, "Hamlet", 500);

obras.push (obra1);

console.log (obras);

//ARREGLO
const estrenos= ["El fantasma de la ópera", "Sueño de una noche de verano", "Don Juan Tenorio"];
console.log(estrenos[1]);


for(let index = 0; index < estrenos.length; index++){
  console.log(estrenos[index]);
      }

const obrasClasicas= ["La divina comedia", "Romeo y Julieta", "La casa de Bernarda Alba", "La Celestina"];
let clasicos = prompt ("Ingrese una obra clásica");
      if(obrasClasicas.includes(clasicos)){
        alert(`${clasicos} encontrada`);
      }else{
        alert(`${clasicos} no encontada`);
      }

//METODO

obrasClasicas.forEach(item =>{
  console.log(item);
});


  //TERCER ENTREGA - DOM

let saludo = document.getElementById("saludo");
let funcion = prompt("Ingrese las funciones que desea ver: estrenos o clasicos");

if (funcion === "estrenos") {
    saludo.innerHTML = "<h1>Bienvenidos a Estrenos</h1>";
    saludo.className = "rojo";
  } else if (funcion === "clasicos") {
    saludo.innerHTML = "<h1>Bienvenidos a las Obras Clásicas</h1>";
    saludo.className = "azul";
  } else {
    saludo.innerHTML = "<h1>Bienvenidos a nuestro TEATRO</h1>";
    saludo.className = "verde";
  }
  
//crear nodo

let contendor= document.getElementById("contenedor");

let parrafo = document.createElement("p");
parrafo.innerHTML = "<H3 class=font>El teatro para mi representa al otro, es el diálogo y es la ausencia del odio.</h3>";
contendor.append(parrafo);

//mostrar arreglo

let contenedorUl = document.getElementById("contenedorUl");
obras.forEach(item =>{
  let div = document.createElement("div");
  div.innerHTML= `
  <h2>ID: ${item.id}</h2>
  <p>Nombre: ${item.nombre}</p>
  <b>$: ${item.precio}</b>
  <hr/>
  `;
  contenedorUl.append(div);
});

//EVENTOS

let boton = document.getElementById("boton");
const respuesta = () => {
  console.log("click");
};
boton.addEventListener("click", respuesta);

boton.addEventListener("mouseover", () => {
  saludo.className= "rojo";
});

boton.addEventListener("mouseout", () => {
  saludo.className= "amarillo";
});

boton.addEventListener("mousedown", () => {
  saludo.className= "verde";
});

boton.addEventListener("click", () => {
  saludo.className = "azul";
});

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let inputs = e.target.children;

  if(!inputs[0].value.includes("@")){
    inputs[0].value = "";
  }
});

//STORAGE-JSON

const productos = [
  {id: 1, nombre: "obraUno", precio: 1000},
  {id: 2, nombre: "obraDos", precio: 500},
  {id: 3, nombre: "obraTres", precio: 300},
  {id: 4, nombre: "obraCuatro", precio: 200},
];
localStorage.setItem("carrito", JSON.stringify(productos));

let botonEliminar = document.getElementById("eliminar");

let carrito = [];
let carritoStorage = localStorage.getItem("carrito");

if (carritoStorage) {
  carrito = JSON.parse(carritoStorage);
} else {
  let div = document.createElement("div");
  div.innerHTML = "El carrito está vacío";
  document.body.append(div);
}

carrito.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
    <hr />
  `;
  document.body.append(div);
});

botonEliminar.addEventListener("click", () => {
  localStorage.clear();
  alert("carrito eliminado");
  location.reload();
});

//OPERADORES AVANZADOS

const carritoAvanzado = [ ];
carritoAvanzado.length === 0 && console.log("El carrito está vacío");


const carritoCargado = JSON.parse(localStorage.getItem("carritoCargado")) || [];





