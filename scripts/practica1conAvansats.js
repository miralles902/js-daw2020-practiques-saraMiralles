var promesa = new Promise((resolver, rechazar) => { //creem una nova promesa
  setTimeout(() => resolver("Tiempo concluido"), 5000); //li diguem que volem que dure 5 segons
  setTimeout(() => rechazar("El tiempo no va bien"), 10000); // en cas de no funcionar, li diguem que seran 10 segons
});

promesa
  .then((respuesta) => { //si va tot correcte realitzara el seguent codi
    let text = document.getElementById("texto");
    return text.innerHTML ="<p>" + respuesta + "</p>";
  })
  .catch((error) => { //si hi ha un error es para el funcionament y executa
    let text = document.getElementById("texto");
    text.innerHTML = "<p>" + error + "</p>";
  });

