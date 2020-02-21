function calcularPromedio(array){

    let suma = 0;

    for(let i=0;i<array.length;i++){

        suma = suma + array[i];

    }

    return `El promedio es ${suma/array.length}!`;

}


function buscarNumeroMasPequeño(array){

    
    let menor = array[0];
    
    for(let i=1;i<array.length;i++){
    
        if(array[i]<menor){
    
            menor = array[i];
    
        }
    
    }
    
    return `El numero mas pequeño es ${menor}!`;

}


function buscarNumeroMasGrande(array){

    let mayor = array[0];
    
    for(let i=1;i<array.length;i++){

        if(array[i]>mayor){

            mayor = array[i];

        }

    }

    return `El numero mas grande es ${mayor}!`;

}


function buscarNumeroMasFrecuente(array){

    let masFrecuente;
    let contador = 0;
    let auxMasFrecuente;
    let auxContador;

    for(let i=0;i<array.length;i++){

        auxContador = 0;
        
        for(let j=0;j<array.length;j++){

            if(array[j]===array[i]){

                auxMasFrecuente = array[j];

                auxContador++;

            }

        }

        if(auxContador>contador){

            masFrecuente = auxMasFrecuente;

            contador = auxContador;

        }

    }    

    return `El numero mas frecuente es ${masFrecuente} repitiendose un total de ${contador} veces!`

}
