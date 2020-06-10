// variables
var btnDolar = document.getElementById('dolar')
var btnEu = document.getElementById('euro')
var inputVal = document.getElementById('inputValor')
var inputResultado = document.getElementById('result')
var formato = document.getElementById('formato')

var dolar = 57;
var euro = 60;


btnDolar.addEventListener('click', () => {
    console.log('Dolar');
    
    inputVal.classList = 'form-control dolar';
    inputResultado.style.display = 'block';
    formato.innerHTML = `
        Dolar 👉 Peso Dominicano
    `;

    inputVal.addEventListener('keyup', () => {
        var sumatoria = inputVal.value * dolar;
        inputResultado.innerHTML = `
            $${Intl.NumberFormat().format(sumatoria) }
        `;
    })

});

btnEu.addEventListener('click', () => {
    console.log('euro');

    inputVal.classList = 'form-control euro';
    inputResultado.style.display = 'block';
    formato.innerHTML = `
        Euro 👉 Peso Dominicano
    `;

    inputVal.addEventListener('keyup', () => {

        var sumatoria = inputVal.value * euro;

        inputResultado.innerHTML = `
            $${Intl.NumberFormat().format(sumatoria) }
        `;
    })
});