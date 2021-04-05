if (window.SimpleSlide) {
  new SimpleSlide ({
    slide: 'quote', // nome do atributo data-slide="principal"
    nav: false, // se deve ou não mostrar a navegação
    time: 5000, // tempo de transição dos slides

})
new SimpleSlide ({
  slide: 'portfolio',
  nav: true, 
  time: 5000,
})
}
if (window.SimpleAnime) {
  new SimpleAnime();
}
