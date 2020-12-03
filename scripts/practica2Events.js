document.getElementById('capa1').addEventListener('dragstart', function (e) {
  e.dataTransfer.setData('text', e.target.id); //guardem el element que arrastrem
  this.style.opacity = '0.5'; //afegim una opacitat del 50%
});
document.getElementById('capa2').addEventListener('dragenter', capa, false);
function capa() {
  e.preventDefault(); // evitem que la pagina fasga cambis no desitjats
  document.getElementById('capa2').style.background = 'red'; //pintem de roig el fondo cuant toquem la capa2
}
document.getElementById('capa2').addEventListener('dragleave', function (e) {
  e.preventDefault(); // evitem que la pagina fasga cambis no desitjats
  this.removeEventListener('dragenter', capa); //Eliminem el color roig al eixir del cuadrat
});
document.getElementById('capa2').addEventListener('drop', function (e) {
  e.preventDefault(); // evitem que la pagina fasga cambis no desitjats
  this.style.background = 'yellow'; //pintem el fondo de capa2 de groc
  this.innerHTML = '¡¡¡Lo has logrado!!!'; //cambiem el text
  let dataT = e.dataTransfer.getData('text'); //obtenim la informació de capa1
  document.getElementById(dataT).style.display = 'none'; //cambiem la visibilitat de capa1 per a que no es vesga
});
