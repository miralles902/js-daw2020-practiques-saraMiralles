function objetos_p1() {
  let punto = new Object();
  punto.x = 12;
  punto.y = 5;

  punto.cambiar = function () {
    this.x *= 2;
    this.y *= 5;
    return `(${punto.x},${punto.y})`;
  };

  punto.suma = function () {
    return (this.x += this.y);
  };

  punto.copia = function () {
    return `(${punto.x},${punto.y})`;
  };

  console.log(punto.copia());
  console.log(punto.cambiar());
  console.log(punto.suma());
}
