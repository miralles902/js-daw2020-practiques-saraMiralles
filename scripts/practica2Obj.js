function objetos_p2() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  console.log(arr.reduce(reducer));
}
