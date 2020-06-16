// -----Variables------

export const btnDolar = document.getElementById('dolar'),
      btnEu = document.getElementById('euro'),
      inputVal = document.getElementById('inputValor'),
      inputResultado = document.getElementById('result'),
      formato = document.getElementById('formato'),
      tsDolar = document.querySelector('#ts-dolar'),
      tsEuro = document.querySelector('#ts-euro'),
      alerta = document.querySelector('.d-alert'),
      reHeader = document.querySelector('im'),

     // variables de mi select
      selector = document.querySelector('#abrirSelect'),
      dolarSE = document.querySelector('#dolarSE'),
      euroSE = document.querySelector('#euroSE'),
      mexicoSE = document.querySelector('#mexicoSE'),
      colombiaSE = document.querySelector('#colombiaSE')

// valores de monedas
var dolar = 58;
var euro = 66;
var mexico = 2.63;
var colombiano = 0.016;

// -----Clases------

class Interfaz {
    imprimir(valor, place, style, alert) {
        inputVal.placeholder = `${place}`;

        // debug
        console.log(valor);
        console.log(`${place}`);
        console.log(style);
        console.log(alert);

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
        alerta.innerHTML += `
            <div class="alert  text-white text-center " role="alert">
                ${alert} 
            </div>
        `;
        setTimeout( () => {
            alerta.innerHTML = ''
        },3000)
    };
}

// -----Event Listener------

selector.addEventListener('click', () => {
    abrirSelector();
})

dolarSE.addEventListener('click', () => {
    convertirDolar();
} )

euroSE.addEventListener('click', () => {
    convertirEuro();
} )

mexicoSE.addEventListener('click', () =>{
    convertirMexicano();
})

colombiaSE.addEventListener('click', () =>{
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
        dolar,
        'Dolar',
        'dolar',
        'Dolar a Peso Dominicano'
    )
    let selecion = document.querySelector('.d-monedas')

    selecion.classList = 'd-monedas'
}

const convertirEuro = () => {
    const ui = new Interfaz();
    ui.imprimir(
        euro,
        'Euro',
        'euro',
        'Euro a Peso Dominicano'
    )
    let selecion = document.querySelector('.d-monedas')

    selecion.classList = 'd-monedas'
}

const convertirMexicano = () => {
    const ui = new Interfaz();
    ui.imprimir(
        mexico,
        'Peso Mexicano',
        'mexicano',
        'Peso Mexicano a Peso Dominicano'
    )
    let selecion = document.querySelector('.d-monedas')

    selecion.classList = 'd-monedas'
}

const convertirColombiano = () => {
    const ui = new Interfaz();
    ui.imprimir(
        colombiano,
        'Peso Colombiano',
        'colombia',
        'Peso Colombiano a Peso Dominicano'
    )
    let selecion = document.querySelector('.d-monedas')

    selecion.classList = 'd-monedas'
}
// console.log(`
//     Creado por @robertrm0 con ❤

//     Dejame una ⭐ en mi repo 👉 https://robertrm0.github.io/

//     Compartelo con tus amigos y familiares ❤
// `);

