let nom = document.getElementById("Nombre"); //llamamos a id de nombre
//como no tenemos boton le indicamos que haremos submit con el input
document.querySelector("form").addEventListener("submit", e => {e.preventDefault();}); //
document.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) { //al levantar el boton enter envia
    event.preventDefault();
    const result = document.getElementById("resultado").value; //llamamos al valor del id de resultado
    sessionStorage.nombre = result; //guardamos el resultado
  }
});
let usuari = sessionStorage.nombre; //recogemos el texto guardado
nom.innerHTML = `Su nombre de usuario es ${usuari}`; //lo mostramos por pantalla se verá al pulsar f5
