let video = document.querySelector("video"); //selecionamos el elemento video
let main = document.querySelector("main");  //selecionamos el elemento main
video.addEventListener("mousedown", (event) => { //al pulsar el raton
  if (event.button == 2) { //click izquierdo
    //convertimos la duracion 
    var min = parseInt(video.duration / 60, 10);
    var seg = video.duration % 60; 
    main.textContent = "Duracion: " + min+":"+seg; //imprimimos por pantalla
  } else if (event.button == 0) { //click derecho
    if(video.paused == true){ //si el video esta pausado, se reproduce
    video.play();
    }
    else if(video.paused == false){ //si el video no esta pausado, se pausa
        video.pause();
        }
  }
});


