const BASE_URL = "https://reqres.in/api/users/";
const POSTMAN_URL = "https://httpbin.org/post";

//Código principal dentro del evento load
//para asegurar la carga de los componentes
window.addEventListener("load", (ev) => {
  let numsecs = document.getElementById("numsecs");
  let user = document.getElementById("user");
  let boton = document.querySelector("button");

  boton.addEventListener("click", (ev) => {
    ev.preventDefault();
    clearFields();
    procesarFetch(numsecs.value, user.value);
  });
});

//limpiar campos
function clearFields() {
  document.querySelectorAll("span").forEach((element) => {
    element.innerHTML = "";
    console.log(element);
  });
}

function procesarFetch(numsecs, user) {
  let id = document.getElementById("id");
  let email = document.getElementById("email");
  let nombre = document.getElementById("name");
  let status = document.getElementById("status");

  //fetch get
  fetch(BASE_URL + user + "?delay=" + numsecs, {
    //llamamos la direccion y agregamos el contenido del input
    //agregamos metodo y definimos que no queremos usar cache
    method: "GET",
    cache: "no-cache",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return status.innerText = "404"; //si se introduce un valor no adecuado devuelve 404
      }
    }) //pasamos la respuesta a json
    .then((json) => {
      let datos = json.data;
      let ide = datos.id;
      let emails = datos.email;
      let name = datos.first_name;
      //introducimos el json que necesitamos en el id y el email del html
      id.innerText = ide;
      email.innerText = emails;
      
      //fetch post
      fetch(POSTMAN_URL, {
        //llamamos la direccion
        //agregamos metodo post y definimos que no queremos usar cache y le añadimos el body
        method: "POST",
        cache: "no-cache",
        body: name,
      })
        .then((response) => {
          if (response.ok) {
            nombre.innerText = name; //si funciona bien devuelve el nombre
            status.innerText = "200"; //devuelve 200 como estado correcto
          } 
        })
        .catch((error) => {
          id.innerText = error;
          email.innerText = error;
        });
    })
    .catch((error) => {
      id.innerText = "";
      email.innerText = "";
    });
}
