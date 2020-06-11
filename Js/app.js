// -----Variables------

var btnDolar = document.getElementById('dolar')
var btnEu = document.getElementById('euro')
var inputVal = document.getElementById('inputValor')
var inputResultado = document.getElementById('result')
var formato = document.getElementById('formato')

const dolar = 58;
const euro = 66;

// -----Clases------

class Interfaz {
    imprimir(valor, place, style) {
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
    }
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
    ui.imprimir(dolar, 'Dolar', 'dolar')

    inputVal.value = ''
    inputResultado.value = ''

};

// convertir euro
function convertirEuro() {
    // creamos una nueva ui
    const ui = new Interfaz();

    // agregamos los datos para convertir y llamamos a la clase
    ui.imprimir(euro, 'Euro', 'euro')

    inputVal.value = ''
    inputResultado.value = ''
}
