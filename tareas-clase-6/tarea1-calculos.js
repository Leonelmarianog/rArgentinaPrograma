function buscarEdadMayor(array){

    let edadMayor = array[0];

    for(let i=0;i<array.length;i++){

        if(array[i] > edadMayor){

            edadMayor = array[i];

        }

    }

    return edadMayor;

}

function buscarEdadMenor(array){

    let edadMenor = array[0];

    for(let i=0;i<array.length;i++){

        if(array[i] < edadMenor){

            edadMenor = array[i];

        }

    }

    return edadMenor;

}

function calcularPromedio(array){

    let suma = 0;

    for(let i=0;i<array.length;i++){

        suma = suma + array[i];

    }

    return suma/array.length;

}
