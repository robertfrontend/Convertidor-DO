
// precio del dolar
var vDolarDo = 57.60;
// precio del Euro
var vEuroDo = 65;

let nameInvertir = document.querySelector('#name-invertir');
let resulDiv = document.querySelector('.resultado div');
let datosInput = document.getElementById('datosInput');
let btnCambiarUs = document.getElementById('cambiarUs');

// ------Convertir de Dolar a Peso Dominicano

// siempre tener disponible la funcion convertir
converUSA();
function converUSA() {

    // evento cuando se comienza a escribir
    datosInput.addEventListener('keyup', () => {
    
        // multiplico el valor ingresado con el valor de la moneda
        const res = datosInput.value * vDolarDo;

        // cambiamos letras de convertidor
         document.getElementById('resultado').innerHTML = `
              <span>$${Intl.NumberFormat("en-IN").format(datosInput.value)}</span>USD = 
              <span>$${Intl.NumberFormat("en-IN").format(res)}</span>DOP
         `; 
    })
}

btnCambiarUs.addEventListener('click', () =>{
    nameInvertir.innerHTML = `
        Dolar 👉
        Peso Dominicano
    `;
    datosInput.style.border = '2px solid #343A40';
    datosInput.style.color = 'black'
    resulDiv.classList = 'bg-dark';
    nameInvertir.style.color = '#343A40'


    document.getElementById('resultado').innerHTML = `
        Dolar a Peso Dominicano
    `;
    converUSA();

})
//fin convertir USA a peso Dominicano

// -----Convertir Euro a peso Dominicano

// boton cambiar a convertidor euro
var btnCambiar = document.getElementById('cambiarEu');

// Evento para cambiar a Euro
btnCambiar.addEventListener('click', cambiarEu);

function cambiarEu() {
    nameInvertir.innerHTML = `
        Euro 👉
        Peso Dominicano
    `;

    document.getElementById('resultado').innerHTML = `
        Euro a Peso Dominicano
    `;

    datosInput.style.border = '2px solid #007BFF';
    datosInput.style.color = 'black'
    resulDiv.classList = 'bg-primary';

    nameInvertir.style.color = '#007BFF'

    convertirEuro();
}

function convertirEuro() {

    // evento cuando se comienza a escribir
    datosInput.addEventListener('keyup', () =>{

        // multiplico el valor ingresado con el valor de la moneda
        const res = datosInput.value * vEuroDo

        // cambiamos letras de convertidor
        document.getElementById('resultado').innerHTML = `
             <span>$${Intl.NumberFormat().format(datosInput.value)}</span>EU = 
             <span>$${Intl.NumberFormat().format(res)}</span> DOP
        `;
    })
}