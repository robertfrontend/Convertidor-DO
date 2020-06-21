// -----Variables------

export const 
      // input para ingresar valores
      inputVal = document.getElementById('inputValor'),

      // input para el resultado
      inputResultado = document.getElementById('result'),

      // mostrar cual es el tipo de cambio
      formato = document.getElementById('formato'),

     // variables de mi select
      selector = document.querySelector('#abrirSelect'),
      dolarSE = document.querySelector('#dolarSE'),
      euroSE = document.querySelector('#euroSE'),
      mexicoSE = document.querySelector('#mexicoSE'),
      colombiaSE = document.querySelector('#colombiaSE')

// valores de monedas
var dolar = 58;
var euro = 65;
var mexico = 3;
var colombiano = 0.016;

// -----Clases------

class Interfaz {
    // Interfaz para mostrar los campos
    imprimir(valor, place, style) {
        inputVal.placeholder = `${place}`;

        // debug
        console.log(valor);
        console.log(`${place}`);
        console.log(style);

        // mostrar los inputs
        inputVal.classList = `form-control ${style} `;
        inputResultado.classList = `form-control ${style} `;
        inputResultado.style.display = 'block';
        formato.innerHTML = `
            ${place} <span >👉</span> Peso Dominicano
        `;
        
        // mientra se escribe se muestra
        inputVal.addEventListener('keyup', () => {
            // multiplicamos el valor del input con el valor del dolar
            var sumatoria = inputVal.value * `${valor}`;
    
            // mostramos el total
            inputResultado.value = sumatoria
        })
    };
}

// -----Event Listener------

selector.addEventListener('click', () => {
    // llamamos a la funcion abrirSelector
    abrirSelector();
})

dolarSE.addEventListener('click', () => {
    // funcion para convertir dolar
     convertirDolar();
})

euroSE.addEventListener('click', () => {
    // funcion para convertir euro
    convertirEuro();
} )

mexicoSE.addEventListener('click', () =>{
    // funcion para convertir en peso mexicano
    convertirMexicano();
})

colombiaSE.addEventListener('click', () =>{
    // funcion para convertir en peso colombiano
    convertirColombiano();
})

// -----Functions------
const abrirSelector = () => {

    let selecion = document.querySelector('.d-monedas')
    selecion.style.transition = 'all 1.2s'
    selecion.classList.toggle('abrirDmonedas')
}

const convertirDolar = () => {
    const ui = new Interfaz();
    ui.imprimir(
        dolar, // moneda
        'Dolar', // nombre input
        'dolar' // agregar input
    )
    let selecion = document.querySelector('.d-monedas');

    selecion.classList = 'd-monedas';
}

const convertirEuro = () => {
    const ui = new Interfaz();
    ui.imprimir(
        euro, // moneda
        'Euro', // nombre input
        'euro' // agregar input
    )
    let selecion = document.querySelector('.d-monedas');

    selecion.classList = 'd-monedas';
}

const convertirMexicano = () => {
    const ui = new Interfaz();
    ui.imprimir(
        mexico, // moneda
        'Peso Mexicano', // nombre input
        'mexicano' // agregar input
    )
    let selecion = document.querySelector('.d-monedas');

    selecion.classList = 'd-monedas';
}

const convertirColombiano = () => {
    const ui = new Interfaz();
    ui.imprimir(
        colombiano, // moneda
        'Peso Colombiano', // nombre input
        'colombia' // agregar inputs
    )
    let selecion = document.querySelector('.d-monedas')

    selecion.classList = 'd-monedas'
}
console.log(`
     Creado por @robertrm0 con ❤

     Dejame una ⭐ en mi repo 👉 https://robertrm0.github.io/

     Compartelo con tus amigos y familiares ❤
`);
