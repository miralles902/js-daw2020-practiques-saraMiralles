function Punto(x, y) {
  this.x = isNaN(x) ? 0 : x; // si la coordenada no es un numero es camvia per 0
  this.y = isNaN(y) ? 0 : y;
  this.mostrar = () => `(${this.x},${this.y})`;

  this.cambiar = function () {
    this.x *= 2;
    this.y *= 5;
    return `(${this.x},${this.y})`;
  };

  this.suma = function () {
    return (this.x += this.y);
  };

  this.copia = () => new Punto(this.x, this.y);
}

//creacio dels objectes a y b
let a = new Punto(10, 20);
let b = new Punto(a, 21);

//objectes amb una funcio asignada
var cop = a.copia();
var cmb = a.cambiar();
var sum = a.suma();

var cop2 = b.copia();
var cmb2 = b.cambiar();
var sum2 = b.suma();

//coordenades amb 2 numeros
console.log(cop);
console.log(cmb);
console.log(sum);

//coordenades amb una lletra convertida en 0
console.log(cop2);
console.log(cmb2);
console.log(sum2);
