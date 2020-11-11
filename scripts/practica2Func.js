function funcion_p2() {
  let mapa = new Map();
  function agregar(paraula) {
    let contar = 1;

    const escriure = mapa.get(paraula); // utilitzem get per a comprovar si existeix una entrada amb el valor paraula

    if (escriure) {
      contar = escriure + 1; //sumem 1 en cas de que es repetisca la paraula
      mapa.set(paraula, contar);
    }

    mapa.set(paraula, contar);
    // ${contar} ens mostra el valor total numeric que se li defineix a la variable
    // ${paraula} ens mostrará el text de la paraula
    console.log(`La paraula ${paraula} s'ha ingresat ${contar} voltes`);
  }

  while (true) {
    let paraula = window.prompt('Escriu alguna cosa:');
    if (!paraula) {
      break;
    }
    agregar(paraula);
  }
}
