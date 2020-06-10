// variables
var btnDolar = document.getElementById('dolar')
var btnEu = document.getElementById('euro')
var inputVal = document.getElementById('inputValor')
var inputResultado = document.getElementById('result')
var formato = document.getElementById('formato')

const dolar = 58.13;
const euro = 66.12;

// Convertir Dolar
btnDolar.addEventListener('click', () => {
    inputVal.placeholder = 'Dolar'

    console.log('Dolar');
    
    inputVal.classList = 'form-control dolar';
    inputResultado.style.display = 'block';
    formato.innerHTML = `
        Dolar <span id="invertirUs" >👉</span> Peso Dominicano
    `;
    
    inputVal.addEventListener('keyup', () => {
        var sumatoria = inputVal.value * dolar;
        inputResultado.innerHTML = `
            $${Intl.NumberFormat().format(sumatoria) }
        `;
    })

    var invertirUs = document.getElementById('invertirUs')
    invertirUs.style.cursor = 'pointer'
    invertirUs.addEventListener('click', inverDolar)

});

function inverDolar() {
    const psDominicano = 0.017;

    formato.innerHTML = `
        Peso Dominicano <span id="invertirUs" >👉</span> Dolar
    `;

    inputVal.placeholder = 'Peso'

    invertirUs.innerHTML = '👈'

    inputVal.addEventListener('keyup', () => {
        var sumatoria = inputVal.value * psDominicano
        inputResultado.innerHTML = `
        $${Intl.NumberFormat().format(sumatoria) }
    `;
    })

}

// Convertir Euro
btnEu.addEventListener('click', () => {
    inputVal.placeholder = 'Euro'
    console.log('euro');

    inputVal.classList = 'form-control euro';
    inputResultado.style.display = 'block';
    formato.innerHTML = `
        Euro <span id="invertirEu" >👉</span> Peso Dominicano
    `;

    inputVal.addEventListener('keyup', () => {

        var sumatoria = inputVal.value * euro;

        inputResultado.innerHTML = `
            $${Intl.NumberFormat().format(sumatoria) }
        `;
    })

    var invertirEu = document.getElementById('invertirEu')
    invertirEu.style.cursor = 'pointer'
    invertirEu.addEventListener('click', invertirEuro)


});

function invertirEuro() {
    const psDominicano = 0.015;

    formato.innerHTML = `
        Peso Dominicano <span id="invertirEu" >👉</span> Euro
    `;

    inputVal.placeholder = 'Peso'

    invertirEu.innerHTML = '👈'

    inputVal.addEventListener('keyup', () => {
        var sumatoria = inputVal.value * psDominicano
        inputResultado.innerHTML = `
        $${Intl.NumberFormat().format(sumatoria) }
    `;
    })
}