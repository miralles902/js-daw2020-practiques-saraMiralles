document.getElementById('capa1').addEventListener('dragstart', function (e) {
  e.dataTransfer.setData('text', e.target.id); //guardem el element que arrastrem
  this.style.opacity = '0.5'; //afegim una opacitat del 50%
});
document.getElementById('capa2').addEventListener('dragover', function (e) {
  e.preventDefault(); // Evitem que el cursor apareixca com a no permitit
  this.style.background = 'red'; //pintem de roig el fondo cuant toquem la capa2
});
document.getElementById('capa2').addEventListener('drop', function (e) {
  e.preventDefault(); //detindre el event pot recargar la pagina, codig per a evitaro
  this.style.background = 'yellow'; //pintem el fondo de capa2 de groc
  this.innerHTML = '¡¡¡Lo has logrado!!!'; //cambiem el text
  let data = e.dataTransfer.getData('text'); //obtenim la informació de capa1
  document.getElementById(data).style.display = 'none'; //cambiem la visibilitat de capa1 per a que no es vesga
});
