let piedra = document.getElementById('piedra');
let papel = document.getElementById('papel');
let tijera = document.getElementById('tijera');
var result = Math.random();
let resultados = document.getElementById('resultados');
console.log(result);
function clickPiedra() {
    piedra.style = 'background-color: tomato;';
    console.log('piedra');
    if (result < 0.3) {
        resultados.textContent = 'Ganaste 😁';
        piedra.style = 'background-color: greenYellow;';
    } else if(result){
        resultados.textContent = 'Perdiste 😵';
    }
}

function clickPapel() {
    papel.style = 'background-color: tomato;';
    console.log('papel');
    if(result > 0.6) {
        resultados.textContent = 'Ganaste 😁';
        papel.style = 'background-color: greenYellow;';
    } else {
        resultados.textContent = 'Perdiste 😵';
    }
}

function clickTijera() {
    tijera.style = 'background-color: tomato;';
    console.log('tijera');
    if(result > 0.3 && result < 0.6) {
        resultados.textContent = 'Ganaste 😁';
        tijera.style = 'background-color: greenYellow;';
    } else {
        resultados.textContent = 'Perdiste 😵';
    }
}

function reload() {
    function actualizar() {
        location.reload(true);
      }
      setInterval(actualizar(), 4000);
}