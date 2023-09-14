function cadastrarConta() {

  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var senha = document.getElementById('senha').value;

  var conta = {
    nome: nome,
    email: email,
    senha: senha,

  };

  localStorage.setItem('conta', JSON.stringify(conta));

  alert('Cadastro realizado com sucesso!');

}

function entrar() {

  var email = document.getElementById('email').value;

  var senha = document.getElementById('senha').value;

 


  var contaSalva = localStorage.getItem('conta');

  if (contaSalva) {


    var conta = JSON.parse(contaSalva);

 


    if (email === conta.email && senha === conta.senha) {

      alert('Login realizado com sucesso!');
      location.href = "personagem.html";

   var nomeExibidoElement = document.getElementById('nomeExibido');

nomeExibidoElement.textContent = conta.nome;

    } else {
      alert('Email ou senha inválidos!');
    }
  } else {
    alert('Nenhuma conta encontrada!');
  }

}