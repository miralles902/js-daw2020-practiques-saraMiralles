const listaObj = [
  'Mesa',
  'Libreta',
  'Lapiz',
  'Ventilador',
  'Enchufe',
  'Alfombra',
  'Mando',
  'Ambientador',
  'Cable',
  'Lampara',
]; //creem un array amb els noms dels objectes
setTimeout(function () {
  //creem una funcio per a indicar un interval de temps
  result = confirm('Vol ordenar les paraules?'); //preguntem amb confirm si volem ordenar les paraules
  if (result == true) {
    let list = document.getElementsByTagName('li');
    console.log(list);
    for (let i = 0; i < list.length; i++) {
      //recorreguem la llista
      const element = list[i];
      element.innerHTML = ''; //eliminem tots els elements de text del <li>
    }
    listaObj.sort(); //ordenem el array
    for (let j = 0; j < list.length; j++) {
      //recorrem una altra vegada la llista
      const element = list[j];
      element.innerHTML = listaObj[j]; //asignem a la llista cada element del array ordenats previament
    }
  }
}, 3000); //3 segons
