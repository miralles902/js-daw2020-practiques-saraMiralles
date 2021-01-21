function mostrarNotificacion() { //funcion para mostrar el texto de la notificacion
  let n = new Notification(" Información ", {
    body: "Se ha publicado un video nuevo",
  });
  n.addEventListener("click", (ev) => {
    window.open("apis.p2.2.html"); //al pulsar nos movemos al siguiente html
  });
}
function ver() { //pedimos permiso al usuario para mostrarle notificaciones
  let permiso = Notification.permission;
  if (permiso == "default") { //por defecto
    Notification.requestPermission().then((resp) => {
      //preguntamos y si nos ha concedido permiso mostramos la notificacion
      if (resp == "granted") { 
        mostrarNotificacion();
      }
    });
    //si nos ha concedido permiso mostramos la notificacion
  } else if (permiso == "granted") {
    mostrarNotificacion();
  }
}

function temporizador(tiempo) { //promesa que comprobara si se ejecuta en el tiempo que le indiquemos
  var promesa = new Promise((resolver, rechazar) => {
    setTimeout(() => {
      clearTimeout(temp);
      resolver("Funcionamiento correcto");
    }, tiempo);
    var temp = setTimeout(() => {
      rechazar("El tiempo no va bien");
    }, tiempo * 2);
  });
  return promesa;
}

async function contar(numero, elemento = document.body, tiempo, f) {
  try {
    for (let i = numero; i >= 0; i--) {
      await temporizador(tiempo);
      elemento.textContent = i;
    }
    ver(); //despues de la cuenta atras si se ha concedido permiso se meustra la notificacion, sino se pide permiso
    if (f) f();
  } catch (e) {
    console.log("Error " + e);
  }
}

let p = document.querySelector("p"); //selecionamos el elemento <p></p>

contar(5, p, 1000); //le indicamos una cuenta de 5, que se imprima en <p></p> y que cambie cada segundo
