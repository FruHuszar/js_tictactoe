# Javascript oop

## CustomEvent

Példa egy saját esemény létrehozására és hallgatására:

```javascript
sajatEsemeny() {
  const e = new CustomEvent("kedvencekhez", { detail: this });
  window.dispatchEvent(e);
}

window.addEventListener("kedvencekhez", (event) => {
  console.log(event.detail);
});
```

## insertAdjacentHTML

```javascript
// HTML elemet adunk hozzá a DOM-hoz
this.szuloELem.insertAdjacentHTML("beforeend", html);
// Most már meg lehet fogni a gombot, és lehet pozícionálni
```

## Nyílfüggvény !important

```javascript
//A this egy osztályon belüli saját objektum példányt jelenti. Eseménykezelések esetén ha function névtelen függvényt használunk, akkor az eseményt kiváltó html dom elemre mutat (mint event target); nyílfüggvény esetén pedig ténylegesen az osztályból képzett aktuális objektumra.

valami.addEventListener("kedvencekhez", function (event) {
  console.log(event.detail);
});

valami.addEventListener("kedvencekhez", (event) => {
  console.log(event.detail);
});
```
