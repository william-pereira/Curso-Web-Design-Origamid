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

new SimpleForm({
  form: ".formphp", // seletor do formulário
  button: "#enviar", // seletor do botão
  erro: "<div id='form-erro'><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // mensagem de erro
  sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
});
