let numeroJuego = 0;
let juegoActual;

/*botones de menu principal del juego*/
let modeAdivinaPj = document.getElementById("mode-adivina-pj");
let modeFrases = document.getElementById("mode-frases");
let modeHabilidades = document.getElementById("mode-habilidades");
let modeFotos = document.getElementById("mode-fotos");

let modosContainer = document.querySelector(".modos");

/*Containers de los juegos*/
let containerQuienEs = document.getElementById("quien-es");
let containerFrases = document.getElementById("frases");
let containerHabilidades = document.getElementById("habilidades");
let containerFotos = document.getElementById("fotos");

let containers = document.querySelectorAll(".frases");

let elejirModo = document.querySelectorAll(".modos-container div");

//siguiente nivel
let nextLv = document.querySelectorAll(".next-lv");


//Button containers

let menuP = document.querySelectorAll(".menu-principal");


//CAMBIAR DE MENU PRINCIPAL A MODOS


for(let i = 0; i < elejirModo.length; i++){

    elejirModo[i].addEventListener("click", ()=>{

        containers[i].style.display ="flex";
        modosContainer.style.display = "none"
        numeroJuego = i;
    })

}


//Botones cambiar modo

for(i = 0; i < nextLv.length; i++){
    nextLv[i].addEventListener("click", ()=>{

    if(numeroJuego == 0){
        containerQuienEs.style.display = "none" ;
        numeroJuego=1;
        containerFrases.style.display = "flex";

    }else if(numeroJuego == 1){

        containerFrases.style.display = "none";
        numeroJuego = 2;
        containerHabilidades.style.display = "flex";

    }
    else if(numeroJuego == 2){

        containerHabilidades.style.display = "none";
        numeroJuego = 3;
        containerFotos.style.display = "flex";

    }
    else if(numeroJuego == 3){

        containerFotos.style.display = "none";
        numeroJuego = 0;
        modosContainer.style.display = "block";
        

    }

})
}

    for(let j = 0; j < menuP.length; j++){
        menuP[j].addEventListener("click", ()=>{

            modosContainer.style.display = "block";
            containers[j].style.display = "none"

        })
    }
   

    //hacer qselector all de containers y con eso sumar uno en el juego
    //y con eso cambiar al clickear y en menu principal lo mismo


    