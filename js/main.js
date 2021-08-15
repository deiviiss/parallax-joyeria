const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');
const texto = document.getElementById('texto');
console.log('La altura');
console.log(altura);

window.onscroll = () => {
  const scrollFondo = (window.pageYOffset / altura) * 900;
  const alto = 100

  if (scrollFondo <= 100) {
    texto.style.height = (scrollFondo - 15) + alto + 'vh'
  }

  if (scrollFondo <= 104) {
    fondo.style.width = scrollFondo + '%'
  }
}

