document
  .getElementById('imagen')
  .addEventListener('keyup', function (keyF12, altkey) {
    /*utilitzem keyup ya que funcionará 
    cuant soltem les dos tecles y li pasem les tecles a utilitzar en la funció */ this.innerHTML =
      '<img src="https://source.unsplash.com/random" />'; //afegim el src de la imatge per a que es vesga
  });
