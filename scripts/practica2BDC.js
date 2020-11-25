let hoy = new Date(); //creem un objecte de tipus fecha

let caducidadMs = hoy.getTime() + 1000 * 60 * 60 * 24 * 30; // conseguim el temps de 30 dies en milisegons

let caducidad = new Date(caducidadMs);
let guardar = (document.cookie = `'nombre=sara';expires=${caducidad.toUTCStringQ}`); //creem la cookie y li diguem que expire en 30 dies
guardar++; //incrementem la cookie

if (guardar >= 10) {
  //si la cookie amb el nom guardar es superior a 10
  document.cookie = 'nombre=sara;expires=Sat, 01 Jan 2000 00:00:01 GMT'; // borra la cookie utilitzant una fecha anterior a la actual
}
let miCookie = document.cookie; //creem una variable per a mostrar totes les cookies
alert(miCookie); // mostrem les cookies amb un alert (window.alert)
