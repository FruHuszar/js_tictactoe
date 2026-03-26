export function megjelenit(obj = { kep, nev }, szuloELem) {

    let html = `
                    <div class="kartya">
                    <img src="${obj.kep}.jpg" alt="${obj.nev}">
                    <p>${obj.nev}</p>
                    </div>
                `
    szuloELem.innerHTML += html;

}