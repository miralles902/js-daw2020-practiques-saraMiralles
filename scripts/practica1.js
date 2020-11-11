let min = 1;
let max = 49;

function aleatorio(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getLoteria() {
  let valores = [];
  while (valores.length < 6) {
    const value = aleatorio(min, max);
    if (valores.indexOf(value) < 0) {
      valores.push(value);
    }
  }
  return valores;
}

console.log('Practica 1\n****Loteria****');
for (let i = 0; i < 50; i++) {
  const loteria = getLoteria();
  console.log(loteria);
}
