import Elem from "./Elem.js";
import Tabla from "./Tabla.js";

const szuloELem = document.querySelector(".tarolo");

let TABLA = [" "," "," ","X"," ","O"," "," ","X"]
new Tabla(TABLA, szuloELem);

window.addEventListener("katt", (event)=>{
    console.log(event.detail);
    TABLA[event.detail]="X";
    new Tabla(TABLA, szuloELem);
})
