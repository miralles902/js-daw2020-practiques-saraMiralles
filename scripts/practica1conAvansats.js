var promesa = new Promise((resolver, rechazar) => {
  setTimeout(() => resolver("Tiempo concluido"), 5000);
  setTimeout(() => rechazar("El tiempo no va bien"), 10000);
});

promesa
  .then((respuesta) => {
    let text = document.getElementById("texto");
    return text.innerHTML ="<p>" + respuesta + "</p>";
  })
  .catch((error) => {
    let text = document.getElementById("texto");
    text.innerHTML = "<p>" + error + "</p>";
  });

