/*TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, 
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
borrando los inputs ya creados (investigar cómo en MDN).*/


document.querySelector("[name = siguiente-paso]").onclick = function(){

    const $form = document.querySelector("#calculador-edades");

    const cantidadIntegrantes = Number($form["cantidad-integrantes"].value);

    const errorCantidadIntegrantes = validarCantidadIntegrantes(cantidadIntegrantes);

    if(errorCantidadIntegrantes){

        borrarErroresAnteriores();

        mostrarError(errorCantidadIntegrantes);

    }else{

        borrarErroresAnteriores();

        borrarIntegrantesAnteriores();

        crearIntegrantes(cantidadIntegrantes);

        mostrarBotonResetear();

    }

}


document.querySelector("#resetear").onclick = resetear;


const $form = document.querySelector("#calculador-edades");
$form.onsubmit = validarFormulario;


function validarFormulario(event){

    borrarErroresAnteriores();
    ocultarResultados();

    const edades = obtenerEdadesIntegrantes();

    const errorEdades = validarEdades(edades);

    if(errorEdades.cantidadErrores > 0){

        borrarErroresAnteriores();
        manejarErrores(errorEdades);
        mostrarErrores(errorEdades);

    }else{

        borrarErroresAnteriores();
        mostrarEdad("mayor",buscarEdadMayor(edades));
        mostrarEdad("menor",buscarEdadMenor(edades));
        mostrarEdad("promedio",calcularPromedio(edades));
        mostrarResultados();

    }

    event.preventDefault();

}


function validarCantidadIntegrantes(cantidadIntegrantes){

    if(Number.isInteger(cantidadIntegrantes) && cantidadIntegrantes > 0){

        document.querySelector(`[name=cantidad-integrantes]`).className = "";

        return "";

    }else if(!(Number.isInteger(cantidadIntegrantes))){

        if(/[a-z]+/.test(cantidadIntegrantes)){

            document.querySelector(`[name=cantidad-integrantes]`).className = "error";

            return "El campo integrantes debe contener solo numeros."

        }else{

            document.querySelector(`[name=cantidad-integrantes]`).className = "error";

            return "El campo integrantes no puede ser un decimal."

        }
        
    }else if(cantidadIntegrantes === 0){

        document.querySelector(`[name=cantidad-integrantes]`).className = "error";

        return "El campo integrantes no puede ser cero o estar vacio."
        
    }

}


function validarEdades(edades){

    const errores = {cantidadErrores : 0};

    for(let i=0;i<edades.length;i++){

        if(edades[i] > 0 && Number.isInteger(edades[i])){

            errores[`integrante${i+1}`] = "";

        }else if(!(Number.isInteger(edades[i]))){

            if(/[a-z]+/.test(edades[i])){

                errores[`integrante${i+1}`] = `La edad del integrante #${i+1} solo puede contener numeros.`;

                errores.cantidadErrores++

            }else{

                errores[`integrante${i+1}`] = `La edad del integrante #${i+1} no puede ser un decimal.`;

                errores.cantidadErrores++

            }

        }else if(edades[i] === 0){

            errores[`integrante${i+1}`] = `La edad del integrante #${i+1} no puede ser 0 o estar vacio.`;

            errores.cantidadErrores++

        }

    }

    return errores;

}


function crearIntegrantes(cantidadIntegrantes){

    for(let i=0;i<cantidadIntegrantes;i++){

        crearIntegrante(i);

    }

    mostrarBotonCalculo();

}


function crearIntegrante(indice){

    const $integrantes = document.querySelector("#integrantes");

    const $integrante = document.createElement("div");
    $integrante.className = "integrante";

    const $label = document.createElement("label");
    $label.textContent = `Integrante #${indice + 1}`;

    const $input = document.createElement("input");
    $input.setAttribute("name",`integrante${indice + 1}`);
    

    $integrante.appendChild($label);
    $integrante.appendChild($input);
    $integrantes.appendChild($integrante);
    
}


function borrarIntegrantesAnteriores(){
    
    const $integrantes = document.querySelectorAll(".integrante");

    for(let i=0;i<$integrantes.length;i++){

        $integrantes[i].remove();

    }

    ocultarBotonCalculo();
    ocultarResultados();

}


function obtenerEdadesIntegrantes(){

    const $integrantes = document.querySelectorAll(".integrante input");
    const edades = [];

    for(let i=0;i<$integrantes.length;i++){

        edades.push(Number($integrantes[i].value));

    }

    return edades;

}


function mostrarError(error){

    const $errores = document.querySelector("#errores");

    const $error = document.createElement("li");

    $error.innerText = error;
    
    $errores.appendChild($error);
   
}


function mostrarErrores(errores){

    const $errores = document.querySelector("#errores");

    for(let i=1;i<Object.keys(errores).length;i++){

        if(errores[`integrante${i}`]){

            const $error = document.createElement("li");

            $error.innerText = errores[`integrante${i}`];

            $errores.appendChild($error);

        }

    }

}


function borrarErroresAnteriores(){

    const $errores = document.querySelectorAll("li");

    $errores.forEach(function(error){

        error.remove();

    });

}


function manejarErrores(errores){

    for(let i=1;i<Object.keys(errores).length;i++){

        const error = errores[`integrante${i}`];

        if(error){

            document.querySelector(`[name=integrante${i}]`).className = "error";

        }else{
            
            document.querySelector(`[name=integrante${i}]`).className = "";

        }

    }
    
}


function mostrarBotonCalculo(){

    document.querySelector("#calcular").className = "";

}


function ocultarBotonCalculo(){

    document.querySelector("#calcular").className = "oculto";

}


function mostrarResultados(){

    document.querySelector("#analisis").className = "";

}


function ocultarResultados(){

    document.querySelector("#analisis").className = "oculto";

}


function mostrarBotonResetear(){

    document.querySelector("#resetear").className = "";

}


function ocultarBotonResetear(){

    document.querySelector("#resetear").className = "oculto";

}


function mostrarEdad(tipo,valor){

    document.querySelector(`#${tipo}-edad`).textContent = valor;

}


function resetear(){

    borrarIntegrantesAnteriores();
    borrarErroresAnteriores();
    ocultarBotonCalculo();
    ocultarBotonResetear();
    ocultarResultados();

}
