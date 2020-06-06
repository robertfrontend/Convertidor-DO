var vDolarDo = 57.60

let psDominicano = document.getElementById('psDominicano')


psDominicano.addEventListener('keyup', () => {

    const res = psDominicano.value * vDolarDo
    
     document.getElementById('resultado').innerHTML = `
         ${psDominicano.value} <span>Dolares</span> = 
          ${Intl.NumberFormat("en-IN").format(res)} <span>Dominicanos</span>
     `;

     const compartir = document.querySelector('.share')


     compartir.innerHTML = `
         <a href="#">Copiar</a>
     `;

})

