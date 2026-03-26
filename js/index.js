import { KUTYALISTA } from "./adat.js";
import Kutyak from "./Kutyak.js";
import Kutya from "./KUTYA.js";


const szuloELem = document.querySelector(".tarolo")
const kedvencELem = document.querySelector(".kedvencek")

//-----------Második óra-------------

new Kutyak(KUTYALISTA, szuloELem);

/* Kiválasztjuk a kedvenc kutyákat és listába rakjuk őket */
const KEDVENCLISTA=[]
/* Itt kell tudnunk mire kattintottunk */
window.addEventListener("kedvencekhez",(event)=>{
    console.log(event.detail);
    KEDVENCLISTA.push(event.detail);
    let aktualisIndex = KEDVENCLISTA.length-1
    const k1 = new Kutya(KEDVENCLISTA[aktualisIndex], kedvencELem);
})
