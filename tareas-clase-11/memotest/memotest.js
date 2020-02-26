let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

let $pares = [];

let pares = 0;

let cuentaAtras;

let segundos = 59;



const $botonEmpezar = document.querySelector("#empezar");

const $botonReiniciar = document.querySelector("#reiniciar-juego");

$botonEmpezar.onclick = empezarJuego;

$botonReiniciar.onclick = reiniciarJuego;

bloquearBotonReiniciar();



function empezarJuego(){

    timer();

    bloquearBotonEmpezar();

    desbloquearBotonReiniciar();

    repartirCartas();

    desbloquearTodasLasCartas();

    inputJugador();

}

function mezclarNumeros(array) {

    for (let i = array.length - 1; i > 0 ; i--){//Recorro el array del final al comienzo.

      let j = Math.floor(Math.random() * (i + 1));//Asigno un numero aleatorio a J del 1 al 15, luego del 1 al 14, etc.

      let aux = array[i];//Hago el intercambio.

      array[i] = array[j];

      array[j] = aux;

    }

}

function asignarColores(numeros){//Asigna los colores a las cartas en base a los numeros de un array.

    const $cartas = document.querySelectorAll(".carta");

    indice = 0;

    $cartas.forEach(function($carta){

        $carta.id = `color${numeros[indice]}`

        indice++;

    });

}

function repartirCartas(){

    mezclarNumeros(numeros);

    mezclarNumeros(numeros);

    mezclarNumeros(numeros);

    asignarColores(numeros);

}

function inputJugador(){

    const $cartas = document.querySelectorAll(".carta");

    $cartas.forEach(function($carta){

        $carta.onclick = manejarJuego;

    });

}

function manejarJuego(e){

    const $carta = e.target;

    $carta.style.opacity = 1;

    $carta.style.pointerEvents = "none";//Para evitar que el jugador haga multiples clicks en la misma carta.

    $pares.push($carta);

    if($pares.length === 2){//"Si selecciono dos cartas entonces..."

        bloquearInputJugador();

        desbloquearPares($pares);

        chequearPares($pares);

        $pares = [];

        setTimeout(function(){
    
            desbloquearInputJugador();
    
        }, 1500);

    }

    chequearSiGano();

}

function desbloquearPares($pares){

    $pares.forEach(function($carta){

        $carta.style.pointerEvents = "auto";

    });

}

function chequearPares($pares){

    if($pares[0].id === $pares[1].id){

        encontroPar($pares);

        pares++; 

    }else{

        noEncontroPar($pares);

    }

}

function chequearSiGano(){

    if(pares === 8){

        ganar();

    }
    
}

function ganar(){

    setTimeout(function(){

        ocultarContenedorCartas();
        detenerTimer();
        mostrarMensaje(`Ganaste! Presiona "Reiniciar Juego" para jugar de nuevo!`);
        
    },1500);

}

function encontroPar($pares){
    
    setTimeout(function(){

        $pares[0].style.opacity = 0.3;
        $pares[0].style.pointerEvents = "none";
        $pares[1].style.opacity = 0.3;
        $pares[1].style.pointerEvents = "none";

    },1000);

}

function noEncontroPar($pares){

    setTimeout(function(){

        $pares[0].style.opacity = 0;
            
        $pares[1].style.opacity = 0;

    },1000);

}

function bloquearInputJugador(){

    const $cartas = document.querySelectorAll(".carta");

    $cartas.forEach(function($carta){

        $carta.onclick = function(){

        };

    });

}

function desbloquearInputJugador() {

    const $cartas = document.querySelectorAll(".carta");

    $cartas.forEach(function($carta){

      $carta.onclick = manejarJuego;

    });

}

function bloquearBotonEmpezar(){
    
    const $boton = document.querySelector("#empezar");

    $boton.disabled = true;
    
}

function desbloquearBotonEmpezar(){

    const $boton = document.querySelector("#empezar");

    $boton.disabled = false;

}

function bloquearBotonReiniciar(){
    
    const $boton = document.querySelector("#reiniciar-juego");

    $boton.disabled = true;
    
}

function desbloquearBotonReiniciar(){

    const $boton = document.querySelector("#reiniciar-juego");

    $boton.disabled = false;

}

function ocultarContenedorCartas(){

    const $contenedorCartas = document.querySelector("#contenedor-cartas");

    $contenedorCartas.classList.add("oculto");

}

function mostrarContenedorCartas(){

    const $contenedorCartas = document.querySelector("#contenedor-cartas");

    $contenedorCartas.classList.remove("oculto");

}

function mostrarMensaje(mensaje){

    const $contenedorMensaje = document.querySelector("#contenedor-mensaje");

    const $mensaje = document.querySelector("#mensaje");

    $mensaje.textContent = mensaje;

    $contenedorMensaje.classList.remove("oculto");

}

function ocultarMensaje(){
    
    const $contenedorMensaje = document.querySelector("#contenedor-mensaje");

    $contenedorMensaje.classList.add("oculto");

}

function reiniciarJuego(){

    detenerTimer();
    reiniciarTimer();
    ocultarMensaje();
    bloquearBotonReiniciar();
    reiniciarEstado();
    mostrarContenedorCartas();
    bloquearTodasLasCartas();
    desbloquearBotonEmpezar();

}

function reiniciarEstado(){

    numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

    $pares = [];

    pares = 0;

    segundos = 59;

}

function bloquearTodasLasCartas(){

    const $cartas = document.querySelectorAll(".carta");

    $cartas.forEach(function($carta){

        $carta.style.opacity = 0;

        $carta.style.pointerEvents = "none";

    });

}

function desbloquearTodasLasCartas(){

    const $cartas = document.querySelectorAll(".carta");

    $cartas.forEach(function($carta){

        $carta.style.opacity = 0;

        $carta.style.pointerEvents = "auto";

    });
    
}

function timer(){

    cuentaAtras = setInterval(function(){

        const $timer = document.querySelector("#timer");

        $timer.textContent = segundos;
    
        segundos--;
    
        if(segundos < 0){
    
            detenerTimer();

            perder();

        }

    },1000);

}

function detenerTimer(){

    clearInterval(cuentaAtras);

}

function reiniciarTimer(){

    const $timer = document.querySelector("#timer");

    $timer.textContent = "60";

}

function perder(){

    ocultarContenedorCartas();
    detenerTimer();
    mostrarMensaje(`Se te acabo el tiempo! Presiona "Reiniciar Juego" y volve a intentarlo!`);

}






