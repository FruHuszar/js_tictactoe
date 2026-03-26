//A this egy osztályon belüli saját objektum példányt jelenti. Eseménykezelések esetén ha function névtelen függvényt használunk, akkor az eseményt kiváltó html dom elemre mutat (mint event target); nyílfüggvény esetén pedig ténylegesen az osztályból képzett aktuális objektumra. function(event){} vs (event)=>{}

export default class Kutya {
    #obj = {};
    constructor(obj = { kep, nev }, szuloELem) {
        this.#obj = obj;
        this.szuloELem = szuloELem;
        this.megjelenit();

        const gombElem = document.querySelector(".kartya:last-child button");
        gombElem.addEventListener("click", (event)=> {
            console.log("event.target", event.target);
            console.log("this", this)
            this.#obj.kedvenc=true;
            this.sajatEsemeny()
        })
    }

    megjelenit() {
        let html = `
            <div class="kartya">
                <img src="${this.#obj.kep}.jpg" alt="${this.#obj.nev}">
                <p>
                    ${this.#obj.nev}
                    <span>${this.#obj.kedvenc?"❤️‍🔥":"❤️‍🩹"}</span>
                </p>
                <button><span class="material-symbols-outlined">
                heart_plus
                </span></button>
            </div>
            
        `;
        this.szuloELem.insertAdjacentHTML("beforeend", html); //Html dom elem lett, így már meg lehet fogni a gombot, plusz lehet pozícionálni
    }

    getObj() { return this.#obj; }

    setObj(ertek) {
        if (ertek == "oltott") {
            this.#obj.oltott = true;
        } else if (ertek == "nem oltott") {
            this.#obj.oltott = false;
        } else { console.log("nem megfelelő érték") }
    }


    //-----------Második óra-------------

    /* CustomEvent, gyakran fogjuk használni */
    sajatEsemeny(){
        console.log("sajátesemény")
        const e = new CustomEvent("kedvencekhez",{detail:this.#obj})
        window.dispatchEvent(e)
    }

}