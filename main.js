
//primer entrega sin corregir
/*function saludar(){
    let nombre= prompt("Ingrese su nombre");
    let mensaje= `Hola ${nombre}`;
    alert (mensaje);
}


saludar();
let edad = Number (prompt("Ingrese du edad"));

if (edad>=18){
    for(let butaca=1; butaca<=5; butaca++){
        let dni = Number(prompt("Ingrese su DNI"));
        alert(`Butaca #${butaca} DNI ${dni}`);
        }
    alert("Entradas Agotadas");
}else{
    alert("Debe ser mayor de edad");
}*/

//primer entrega corregida
for (let butaca = 1; butaca <= 1; butaca++) {
    let edad = Number(prompt("Ingrese du edad"));
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
    {id: 1, nombre: "La divina comedia", fecha: "22-08-2023"},
    {id: 2, nombre: "Romeo y Julieta", fecha: "22-09-2023"},
    {id: 3, nombre: "La casa de Bernarda Alba", fecha: "22-10-2023"},
    {id: 4, nombre: "La Clestina", fecha: "22-11-2023"},
];

class ObrasNuevas {
    constructor(nombre, fecha){
        this.nombre= nombre;
        this.fecha= fecha;
    }
};

const obra1= new ObrasNuevas("Hamlet", "22-12-2023");

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

  




