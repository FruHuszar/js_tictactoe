/* példányosítás annyiszor ahány eleme van a listának */

import Kutya from "./KUTYA.js";

export default class Kutyak {
    #lista=[];
    constructor(lista, szuloElem){
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.megjelenit();
    }

    megjelenit(){
        /* Itt kell végigmenni a listán */
        this.szuloElem.innerHTML = "";
        this.#lista.forEach( (elem,i)=>{
            const k = new Kutya(elem, this.szuloElem)
        }
        )
    }
}