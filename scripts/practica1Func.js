function funcion_p1() {
  const mySet = new Set();
  function agregar(paraula) {
    let contar = 1;
    let escriure = mySet.add(paraula); // utilitzem get per a comprovar si existeix una entrada amb el valor paraula
    mySet.add(paraula); // y añadim les paraules
  }

  while (true) {
    let paraula = window.prompt('Escriu alguna cosa:');
    if (!paraula) {
      //si no esta buit ni es cancela continua
      break;
    }
    agregar(paraula); //cridem a la funcio on greguem les paraules
  }
  const myArr = Array.from(mySet); // convertim el set en array
  let bubbleSort = (myArr) => {
    //relitzem el metode del bubblesort per a reordenar les paraules
    let len = myArr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (myArr[j] < myArr[j + 1]) {
          let tmp = myArr[j];
          myArr[j] = myArr[j + 1];
          myArr[j + 1] = tmp;
        }
      }
    }
    return myArr;
  };
  console.log(bubbleSort(Array.from(mySet))); //imprimim les paraules de forma ordenada Z-A
}
