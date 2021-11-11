const preguntas = [

    {
        pregunta: "Obra con la que Vargas Llosa se hace acreedor al: Premio Planeta 1994",
        respuestas:[ "Lituma en los Andes","Conversación en la Catedral","Pantaleón y las visitadoras","Los cachorros"],
        correcta: 0
    },

    {
        pregunta: "El género literario que realiza la representación escénica a través del lenguaje directo de los personajes es el",
        respuestas: [" lírico", "épico","narrativo","dramático"],
        correcta: 3
    },

    {
        pregunta: "¿Quien escribió: Los comentarios reales de los Incas?",
        respuestas: ["Inca Garcilazo de la Vega"," Jose Maria Arguedas"," Cesar Vallejo Mendoza","Abraham Valdelomar."],
        correcta: 0
    },

    {
        pregunta: "¿Quien escribió: Las Tradiciones Peruanas?",
        respuestas: [" Jose Maria Arguedas"," Ricardo Palma"," Abraham Valdelomar Pinto","Julio Ramón Ribeyro."],
        correcta: 1
    },

    {
        pregunta: "¿Quien escribió: El Caballero Carmelo?",
        respuestas: [" Jose Maria Arguedas"," Enrique Lopez Albujar", " Ricardo Palma"," Abraham Valdelomar Pinto"],
        correcta: 3
    }

];

let indice_aleatorio = 0;

let pregunta_txt = "";

let interval;

window.onload = iniciar();

function iniciar() {
    loadQuestions();
    if (localStorage.getItem("SCORE") != null) {
        localStorage.removeItem("SCORE");
    }
    }

function iniciarCronometro() {
  const contador = 15, cronometroDisplay = document.getElementById("cronometro")

  iniciarTiempo(contador, cronometroDisplay)
  
}

function iniciarTiempo(duracion, componente) {
    interval = setInterval(() => {
    if (duracion === 0) {

      componente.innerHTML = "Se acabó el tiempo";

      clearInterval(interval);

      loadQuestions()

    } else {
      
      duracion = duracion < 10 ? "0" + duracion : duracion;

      componente.textContent = "00:" + duracion;

      duracion--;
    }
    }, 1000)

}

function loadQuestions() {
   iniciarCronometro();

    if (preguntas.length > 0) {

        indice_aleatorio = Math.floor(Math.random() * preguntas.length);

        pregunta_txt = "";

        pregunta_txt += '<p class="pregunta">' + preguntas[indice_aleatorio].pregunta + '</p>';

        pregunta_txt += '<button id="opcion0" class="botonTrivias" onclick="verificarRespuestaCorrecta(0, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[0] + '</button>';

        pregunta_txt += '<button id="opcion1" class="botonTrivias" onclick="verificarRespuestaCorrecta(1, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[1] + '</button>';

        pregunta_txt += '<button id="opcion2" class="botonTrivias" onclick="verificarRespuestaCorrecta(2, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[2] + '</button>';

        pregunta_txt += '<button id="opcion3" class="botonTrivias" onclick="verificarRespuestaCorrecta(3, ' + preguntas[indice_aleatorio].correcta + ')">' + preguntas[indice_aleatorio].respuestas[3] + '</button>';

        document.getElementById("pregunta").innerHTML = pregunta_txt;

        preguntas.splice(indice_aleatorio, 1);

    } else {
        window.location.href = "respuestas.html";
    }
}

let puntos = 0;

function verificarRespuestaCorrecta(indice, correcta) {
    if (correcta === indice) {
        puntos = puntos + 5;      
    }
    
    localStorage.setItem("SCORE", puntos);
     
    document.getElementById("opcion0").disabled = true;
    document.getElementById("opcion1").disabled = true;
    document.getElementById("opcion2").disabled = true;
    document.getElementById("opcion3").disabled = true;
}

document.getElementById("siguienteTrivia").addEventListener("click", () => { clearInterval(interval), loadQuestions() });