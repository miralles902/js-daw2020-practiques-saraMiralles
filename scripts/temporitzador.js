function temporitzador(t) {
  var promesa = new Promise((resolver, rechazar) => {
    setTimeout(() => resolver("Tiempo concluido"), t);
    setTimeout(() => rechazar("El tiempo no va bien"), 10000);
  });

  promesa
    .then((respuesta) => {
      let text = document.getElementById("texto");
      return (text.innerHTML = "<p>" + respuesta + "</p>");
    })
    .catch((error) => {
      let text = document.getElementById("texto");
      text.innerHTML = "<p>" + error + "</p>";
    });
}

async function cuenta(id, i,intervalo) {
    var counter = id;
    var id = setInterval(function () {
      if (counter == 0) {
        clearInterval(id);
        cuenta(60, 1);
      } else {
        counter = counter - i;
        document.body.innerHTML = counter;
      }
    }, intervalo);
  }

export{temporitzador,cuenta}
