//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

let totalHoras = 0;
let totalMinutos = 0;
let totalSegundos = 0;

document.querySelector("#calcular-tiempo-total").onclick = function(){

    const horas = Number(document.querySelector("#horas").value);
    const minutos = Number(document.querySelector("#minutos").value);
    const segundos = Number(document.querySelector("#segundos").value);

    borrarInformacionAnterior();
    mostrarTiempoTotal(horas,minutos,segundos);

}

function mostrarTiempoTotal(hs,min,sgs){

    totalHoras = totalHoras + hs;
    totalMinutos = totalMinutos + min;
    totalSegundos = totalSegundos + sgs;

    const totalTiempo = calcularTiempoTotal(totalHoras,totalMinutos,totalSegundos);

    const $strongPagina = document.querySelector("strong");

    const texto = document.createTextNode(`El tiempo total de video es de ${totalTiempo[0]} horas ${totalTiempo[1]} minutos ${totalTiempo[2]} segundos!`);
    
    $strongPagina.appendChild(texto);

}

function borrarInformacionAnterior(){

    document.querySelector(".tiempo-total").textContent = "";

}
