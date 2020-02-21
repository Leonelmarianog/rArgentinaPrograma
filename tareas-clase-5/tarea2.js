//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*/


document.querySelector("#mostrar").onclick = function(){

  const primerNombre = document.querySelector("#primer-nombre").value;
  const segundoNombre = document.querySelector("#segundo-nombre").value;
  const apellido = document.querySelector("#apellido").value;
  const edad = Number(document.querySelector("#edad").value);
  
  borrarInformacionAnterior();
  cambiarTituloDeBienvenida(primerNombre,segundoNombre,apellido);
  mostrarInformacion(primerNombre,segundoNombre,apellido,edad);

}


function cambiarTituloDeBienvenida(nombre1,nombre2,apellido){

  document.querySelector("h1").textContent = `Bienvenido ${nombre1} ${nombre2} ${apellido}!`

}


function mostrarInformacion(nombre1,nombre2,apellido,edad){

  const $divPagina = document.querySelector("#informacion");

  const $nuevoParrafo1 = document.createElement("p");
  $nuevoParrafo1.className = "dato";
  
  const $nuevoParrafo2 = document.createElement("p");
  $nuevoParrafo2.className = "dato";

  const $nuevoParrafo3 = document.createElement("p");
  $nuevoParrafo3.className = "dato";

  const $nuevoParrafo4 = document.createElement("p");
  $nuevoParrafo4.className = "dato";

  const texto1 = document.createTextNode("Tu nombre es ");
  const texto2 = document.createTextNode("Tu segundo nombre es ");
  const texto3 = document.createTextNode("Tu apellido es ");
  const texto4 = document.createTextNode("Tu edad es ");

  const $nuevoStrong1 = document.createElement("strong");
  const $nuevoStrong2 = document.createElement("strong");
  const $nuevoStrong3 = document.createElement("strong");
  const $nuevoStrong4 = document.createElement("strong");

  const informacion1 = document.createTextNode(`${nombre1}`);
  const informacion2 = document.createTextNode(`${nombre2}`);
  const informacion3 = document.createTextNode(`${apellido}`);
  const informacion4 = document.createTextNode(`${edad}`);

  $nuevoStrong1.appendChild(informacion1);
  $nuevoStrong2.appendChild(informacion2);
  $nuevoStrong3.appendChild(informacion3);
  $nuevoStrong4.appendChild(informacion4);

  $nuevoParrafo1.appendChild(texto1);
  $nuevoParrafo2.appendChild(texto2);
  $nuevoParrafo3.appendChild(texto3);
  $nuevoParrafo4.appendChild(texto4);

  $nuevoParrafo1.appendChild($nuevoStrong1);
  $nuevoParrafo2.appendChild($nuevoStrong2);
  $nuevoParrafo3.appendChild($nuevoStrong3);
  $nuevoParrafo4.appendChild($nuevoStrong4);

  $divPagina.appendChild($nuevoParrafo1);
  $divPagina.appendChild($nuevoParrafo2);
  $divPagina.appendChild($nuevoParrafo3);
  $divPagina.appendChild($nuevoParrafo4);

}

function borrarInformacionAnterior(){

  const $informacion = document.querySelectorAll(".dato");
  console.log($informacion);

  for(let i=0;i<$informacion.length;i++){

    $informacion[i].remove();

  }

}
