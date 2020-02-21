//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


document.querySelector("#cargar-numeros").onclick = function(){

    const numero = Number(document.querySelector("#ingresar-numero").value);

    cargarNumeros(numero);
    
}

document.querySelector("#borrar-ultimo-numero").onclick = function(){

    borrarUltimoNumero();

}

document.querySelector("#calcular").onclick = function(){

    borrarResultadosAnteriores();

    let numeros = cargarArray();

    mostrarResultados(numeros);

}


function cargarNumeros(numero){

    const $listaPagina = document.querySelector("ol");

    const $nuevoItem = document.createElement("li");
    $nuevoItem.className = "item";

    const nuevoNumero = document.createTextNode(`${numero}`);

    $nuevoItem.appendChild(nuevoNumero);
    $listaPagina.appendChild($nuevoItem);

}


function borrarUltimoNumero(){

    const $numeros = document.querySelectorAll(".item");

    if($numeros.length>0){

        $numeros[$numeros.length-1].remove();

    }

}


function mostrarResultados(array){

    const $emPagina = document.querySelector("em");

    const nuevoParrafo1 = document.createElement("p");
    nuevoParrafo1.className = "resultado";
    const nuevoParrafo2 = document.createElement("p");
    nuevoParrafo2.className = "resultado";
    const nuevoParrafo3 = document.createElement("p");
    nuevoParrafo3.className = "resultado";
    const nuevoParrafo4 = document.createElement("p");
    nuevoParrafo4.className = "resultado";

    const textoParrafo1 = document.createTextNode(calcularPromedio(array));
    const textoParrafo2 = document.createTextNode(buscarNumeroMasPequeño(array));
    const textoParrafo3 = document.createTextNode(buscarNumeroMasGrande(array));
    const textoParrafo4 = document.createTextNode(buscarNumeroMasFrecuente(array))

    nuevoParrafo1.appendChild(textoParrafo1);
    nuevoParrafo2.appendChild(textoParrafo2);
    nuevoParrafo3.appendChild(textoParrafo3);
    nuevoParrafo4.appendChild(textoParrafo4);

    $emPagina.appendChild(nuevoParrafo1);
    $emPagina.appendChild(nuevoParrafo2);
    $emPagina.appendChild(nuevoParrafo3);
    $emPagina.appendChild(nuevoParrafo4);

}


function cargarArray(){

    const $numeros = document.querySelectorAll("li");

    const numeros=[];

    for(let i=0;i<$numeros.length;i++){

        numeros.push(Number($numeros[i].textContent))

    }

    return numeros;

}


function borrarResultadosAnteriores(){

    const $resultados = document.querySelectorAll(".resultado");

    for(let i=0;i<$resultados.length;i++){

        $resultados[i].remove();
    }

}
