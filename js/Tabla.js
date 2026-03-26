import Elem from "./Elem.js";

export default class Tabla{
    #lista = [];
    constructor(lista, szuloElem){
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.megjelenit();
    }
    megjelenit(){
        /* Itt kell végigmenni a listán */
        this.szuloElem.innerHTML = "";
        this.#lista.forEach( (box,i)=>{
            const k = new Elem(box, this.szuloElem)
        }
        )
    }
}