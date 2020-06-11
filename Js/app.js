'use strict'
// -----Variables------

const btnDolar = document.getElementById('dolar'),
      btnEu = document.getElementById('euro'),
      inputVal = document.getElementById('inputValor'),
      inputResultado = document.getElementById('result'),
      formato = document.getElementById('formato'),
      tsDolar = document.querySelector('#ts-dolar'),
      tsEuro = document.querySelector('#ts-euro'),
      alerta = document.querySelector('.d-alert')

var dolar = 58;
var euro = 66;

// -----Clases------

class Interfaz {
    imprimir(valor, place, style, alert) {
        inputVal.placeholder = `${place}`

        console.log(`${place}`);
        
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
        alerta.innerHTML = `
            <div class="alert  text-white text-center " role="alert">
                ${alert} 
            </div>
        `;
        setTimeout( () => {
            alerta.innerHTML = `
            `;
        },3000)
    };
}
// -----Event Listener------

// event dolar
btnDolar.addEventListener('click', () => {

    convertirDolar();
});
// event euro
btnEu.addEventListener('click', () => {
    convertirEuro();
});

// -----Funciones------

//convertir dolar
function convertirDolar() {
    // creamos una nueva ui
    const ui = new Interfaz();

    // agregamos los datos para convertir y llamamos a la clase
    ui.imprimir(
        dolar, 
        'Dolar', 
        'dolar',
        'Dolar a Peso Dominicano'
    );

    inputVal.value = '';
    inputResultado.value = '';

};

// convertir euro
function convertirEuro() {
    // creamos una nueva ui
    const ui = new Interfaz();

    // agregamos los datos para convertir y llamamos a la clase
    ui.imprimir(
        euro, 
        'Euro', 
        'euro',
        'Euro a Peso Dominicano'

    );
    inputVal.value = '';
    inputResultado.value = '';
}