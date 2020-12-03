document.addEventListener('keyup', function (e) {
  /*utilitzem keyup ya que funcionará 
    cuant soltem les dos tecles y li pasem les tecles a utilitzar en la funció */
  if (e.altKey == true && e.code == 'F12') {
    this.innerHTML = '<img src="https://source.unsplash.com/random" />'; //afegim el src de la imatge per a que es vesga
  }
});
