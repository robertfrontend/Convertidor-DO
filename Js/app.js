
// precio del dolar
var vDolarDo = 57.60;
// precio del Euro
var vEuroDo = 65;

let nameInvertir = document.querySelector('#name-invertir');
let resulDiv = document.querySelector('.resultado div');
let psDominicano = document.getElementById('psDominicano');
let btnCambiarUs = document.getElementById('cambiarUs');

// siempre tener disponible la funcion convertir
converUSA();

// ------Convertir de Dolar a Peso Dominicano
function converUSA() {

    // evento cuando se comienza a escribir
    psDominicano.addEventListener('keyup', () => {
    
        // multiplico el valor ingresado con el valor de la moneda
        const res = psDominicano.value * vDolarDo;

        // cambiamos letras de convertidor
         document.getElementById('resultado').innerHTML = `
              <span>$${Intl.NumberFormat("en-IN").format(psDominicano.value)}</span>USD = 
              <span>$${Intl.NumberFormat("en-IN").format(res)}</span>DOP
         `; 
    })
}


btnCambiarUs.addEventListener('click', () =>{
    nameInvertir.innerHTML = `
        Dolar 👉
        Peso Dominicano
    `;
    psDominicano.style.border = '2px solid #343A40';
    psDominicano.style.color = 'black'
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

    psDominicano.style.border = '2px solid #007BFF';
    psDominicano.style.color = 'black'
    resulDiv.classList = 'bg-primary';

    nameInvertir.style.color = '#007BFF'

    convertirEuro();
}

function convertirEuro() {

    // evento cuando se comienza a escribir
    psDominicano.addEventListener('keyup', () =>{

        // multiplico el valor ingresado con el valor de la moneda
        const res = psDominicano.value * vEuroDo

        // cambiamos letras de convertidor
        document.getElementById('resultado').innerHTML = `
             <span>$${Intl.NumberFormat("en-IN").format(psDominicano.value)}</span>EU = 
             <span>$${Intl.NumberFormat("en-IN").format(res)}</span> DOP
        `;
    })
}