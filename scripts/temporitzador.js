function temporitzador(intervalo,id) { //asi introduirem el temps en milisegons que volem
  var promesa = new Promise((resolve, reject) => { //creem la promesa
    setTimeout(() => resolve("Tiempo concluido"), intervalo); //si funciona correctament
    setTimeout(() => reject("El tiempo no va bien"), 10000); //si es pasa de temps
  });
  promesa
    .then((respuesta) => { //si va tot correcte realitzara el seguent codi
      let text = document.getElementById(id); //li pasarem el id per parametre
      return (text.innerHTML = "<p>" + respuesta + "</p>");
    })
    .catch((error) => { //si hi ha un error es para el funcionament y executa
      let text = document.getElementById(id);
      text.innerHTML = "<p>" + error + "</p>";
    });
}

async function cuenta(num,i,intervalo,id) { //afegim els parametres
  /*
  - num = element inicial del conter enrere
  - i = numero de que anem a restar, es a dir es llevara de un en un
  - intervalo = temps en milisegons empleat durant el conter enrere
  - id = li asignem el id del html 
  */
  var contar = num;
  return await new Promise(resolve => { 
    const interval = setInterval(() => {
      if (contar==0) {
        resolve('Fin');
        clearInterval(num); //cuant arribem a 0 parara la execucio del programa
      }
      else{
        contar=contar-i; //mentres no pare anirem restant de 1 en 1
        let text = document.getElementById(id); //li pasarem el id per parametre
        text.innerHTML = "<p>" + contar + "</p>";
      }
    }, intervalo); // asi anira el interval de temps que li asignem
  });
}
export{temporitzador,cuenta} // exportem les dos funcions
