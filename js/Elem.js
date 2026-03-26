export default class Elem{
    #adat = "";
    #index;
    constructor(adat, index, szuloElem){
        this.#adat = adat;
        this.#index = index;
        this.szuloElem = szuloElem;
        this.megjelenit();
    }
    megjelenit(){
        let kod = `
            <div class="box">
                <p>${this.#adat}</p>
            </div>
            `
        this.szuloElem.insertAdjacentHTML("beforeend",kod);
    }
    #kattintasEsemeny(){
        this.box = document.querySelector(".box:last-child");
        this.box.addEventListener("click",(event)=>{
            this.#sajatEsemeny();
        });
    }
    #sajatEsemeny(){
        const e = new CustomEvent("katt", {detail:this.#index});
        window.dispatchEvent(e);
    }
}