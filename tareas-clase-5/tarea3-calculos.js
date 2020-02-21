function calcularTiempoTotal(hs,mins,segs){

    let horas = 0;
    let minutos = 0;
    let segundos = 0;

    horas = horas + hs;
    minutos = minutos + mins;
    segundos = segundos + segs;

    while(segundos>59){
        minutos++;
        segundos = segundos - 60;
    }

    while(minutos>59){
        horas++;
        minutos = minutos - 60;
    }

    return [horas,minutos,segundos];

}
