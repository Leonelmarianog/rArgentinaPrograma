let secuenciaMaquina = [];
let secuenciaJugador = [];
let ronda = 0;

const botonEmpezar = document.querySelector("#empezar-juego");

botonEmpezar.onclick = comenzarJuego;

function comenzarJuego(){

    actualizarEstado(`Tocà "Empezar" para jugar!`);
    
    reiniciarJuego();

    turnoMaquina();

    turnoJugador();

}

function turnoMaquina(){

    bloquearInputJugador();

    ronda++;

    actualizarRonda();

    actualizarEstado("Turno de la maquina");

    obtenerSecuenciaMaquina();

    const RETRASO_TURNO_JUGADOR = (secuenciaMaquina.length + 1)*1000;//Asegura que el jugador solo pueda apretar botones DESPUES de que termina de resaltarse la secuencia.

    for(let i=0;i<secuenciaMaquina.length;i++){

        const RETRASO = (i + 1)*1000;//Si este retraso no se toma en cuenta, en vez de resaltarse la secuencia de la maquina de a un boton a la vez, se resaltan todos juntos.

        setTimeout(function(){//Resalta cada tantos segundos.

            resaltar(secuenciaMaquina[i])
        
        },RETRASO);

    }

    setTimeout(function(){//"Desbloquea el input del jugador pasado este tiempo"

        desbloquearInputJugador();

        actualizarEstado("Turno del jugador");

    },RETRASO_TURNO_JUGADOR);

}

function obtenerSecuenciaMaquina(){

    const $botones = document.querySelectorAll(".boton");

    indice = Math.floor(Math.random()*$botones.length);

    secuenciaMaquina.push($botones[indice]);

    console.log(secuenciaMaquina);

}

function turnoJugador(event){

    const $botones = document.querySelectorAll(".boton");

    $botones.forEach(function($boton){

        $boton.onclick = obtenerSecuenciaJugador;

    });

}

function obtenerSecuenciaJugador(e){// e = event

    const $boton = e.target;//Con esto obtengo el elemento al que el jugador le hizo click.

    resaltar($boton);

    secuenciaJugador.push($boton);

    const $botonMaquina = secuenciaMaquina[secuenciaJugador.length - 1];

    if($boton.id !== $botonMaquina.id){

        gameOver();

    }else if(secuenciaJugador.length === secuenciaMaquina.length){

        bloquearInputJugador();

        setTimeout(turnoMaquina,1000);

        secuenciaJugador = [];

    }

}

function resaltar($boton){

    $boton.style.opacity = 1;

    setTimeout(function(){$boton.style.opacity = 0.5},500);    
    
}

function actualizarRonda(){
    
    const $ronda = document.querySelector("#ronda");

    $ronda.innerText = `Ronda # ${ronda}`;

}

function actualizarEstado(estado,perdio=false){

    const $estado = document.querySelector("#estado");

    $estado.textContent = estado;

    if(perdio){

        $estado.className = "alert alert-danger";//Pude tambien haber usado $estado.classList.add('alert-danger') y $estado.classList.remove('alert-primary')

    }else{

        $estado.className = "alert alert-dark";

    }

}

function bloquearInputJugador(){

    const $botones = document.querySelectorAll(".boton");

    $botones.forEach(function($boton){

        $boton.style.pointerEvents = "none";

        console.log("bloqueado!");
    
    });

}

function desbloquearInputJugador(){

    const $botones = document.querySelectorAll(".boton");

    $botones.forEach(function($boton){

        $boton.style.pointerEvents = "auto";

        console.log("desbloqueado!");
    
    });

}

function reiniciarJuego(){

    secuenciaMaquina = [];
    secuenciaJugador = [];
    ronda = 0;

}

function gameOver(){

    bloquearInputJugador();
    reiniciarJuego();
    actualizarEstado("Perdiste! presiona `Empezar` para intentar de nuevo!",true);
    
}
