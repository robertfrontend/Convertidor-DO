// -----Variables------

const btnDolar = document.getElementById('dolar'),
      btnEu = document.getElementById('euro'),
      inputVal = document.getElementById('inputValor'),
      inputResultado = document.getElementById('result'),
      formato = document.getElementById('formato'),
      tsDolar = document.querySelector('#ts-dolar'),
      tsEuro = document.querySelector('#ts-euro'),
      alerta = document.querySelector('.d-alert'),
      reHeader = document.querySelector('#im')

var dolar = 58;
var euro = 65;

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

// event dolar
btnDolar.addEventListener('click', () => {
    convertirDolar();
});
// event euro
btnEu.addEventListener('click', () => {
    convertirEuro();
});

// -----Functions------

// function convertir dolar
const convertirDolar = () => {
    // llamamos a la clase
    const ui = new Interfaz();

    // agregamos los datos para convertir y llamamos a la clase
    ui.imprimir(
        dolar, 
        'Dolar', 
        'dolar',
        'Dolar a Peso Dominicano'
    );
    document.querySelector('.d-alert div').style.background = '#e74c3c';
    reHeader.innerHTML = `Precio del Dolar: $${dolar}`;


    inputVal.value = '';
    inputResultado.value = '';
};

// function convertir euro
const convertirEuro = () => {
    // llamamos a la clase
    const ui = new Interfaz();

    // agregamos los datos para convertir y llamamos a la clase
    ui.imprimir(
        euro, 
        'Euro', 
        'euro',
        'Euro a Peso Dominicano'
    );

    document.querySelector('.d-alert div').style.background = '#3498db';
    reHeader.innerHTML = `Precio del Euro: $${euro}`;

    inputVal.value = '';
    inputResultado.value = '';
}

console.log(`
    Creado por @robertrm0 con ❤

    Dejame una ⭐ en mi repo 👉 https://robertrm0.github.io/

    Compartelo con tus amigos y familiares ❤
`);
