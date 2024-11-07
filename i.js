let btns = document.querySelectorAll(".btn");
let btnCargar = document.querySelector("#btnCargar");
let input = document.querySelector("#Correo");
let infoDiv = document.querySelector("#info");
let textosDiv = document.querySelector("#textos");


const informacion = {
    nombre: "La Liga Nacional de Básquet (abreviada LNB) es la máxima división nacional de básquetbol profesional de Argentina. Si bien al conjunto de las tres divisiones se las conocía como Liga Nacional de Básquet, actualmente se utiliza este término para denominar a la máxima división y para nombrar las siguientes dos divisiones se utilizan los nombres de los respectivos certámenes. Para la filosofía en la que se basa su creación, Liga Nacional es todo el básquetbol argentino desde Mini hasta Liga A. Toda la competencia debe apuntar a mejorar el nivel general y especialmente el de la selección nacional.",
    historia: "Antes de la creación de la liga se disputaba el Campeonato Argentino de Clubes, en el cual participaban representantes de todas las provincias. Tenía un formato zonal y luego play-offs. Para el Campeonato Argentino de 1984, donde había sesenta y cuatro clasificados, se decidió que, teniendo en cuenta los últimos diez campeonatos antes de la fecha, retirar diez equipos. Estos estarían preclasificados para la Primera Nacional A. Fueron cuatro plazas para la federación de Capital Federal y dos para las provincias de Buenos Aires, Córdoba, y Santa Fe.",
    logros: "Al finalizar la temporada regular, la LNB entrega una cierta cantidad de premios a los jugadores, los cuales se destacan individualmente en diferentes cosas, como por ejemplo, mejor sexto hombre o mejor quinteto. También se entregan premios a los entrenadores."
};


function mostrarInformacion(clave) {
    if (informacion[clave]) {
        infoDiv.textContent = informacion[clave];
    } else {
        infoDiv.textContent = "Información no disponible.";
    }
}


btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const tipoInfo = btn.getAttribute("data-info");
        mostrarInformacion(tipoInfo);
    });
});


function cargarCorreo() {
    let correo = input.value; 

    if (correo === "") {
        textosDiv.textContent = "Por favor, ingresa un correo."; 
        textosDiv.style.color = "red"; 
    } else if (correo.indexOf("@") === -1) {
        textosDiv.textContent = "El correo debe contener '@'."; 
        textosDiv.style.color = "red"; 
    } else {
        textosDiv.textContent = `Correo ingresado: ${correo}`; 
        textosDiv.style.color = "green"; 
    }
}


btnCargar.addEventListener("click", cargarCorreo);
