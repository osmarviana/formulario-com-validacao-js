const formulario = document.getElementById("formulario");

const nomeDigitado = document.getElementById("nome");
let validacaoNome = false;

const emailDigitado = document.getElementById("email");
let validacaoEmail = false;

const telefoneDigitado = document.getElementById("telefone");
let validacaoTelefone = false;

const mensagemDigitada = document.getElementById("mensagem");
let validacaoMensagem = false;

const mensagemErro = document.querySelectorAll(".mensagem-erro");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  validarInputs();
  cadastrar();
});

function validarInputs() {
  if (nomeDigitado.value.length <= 2) {
    nomeDigitado.classList.add("erro-preenchimento");

    mensagemErro[0].classList.add("ativar-msg-erro");
    validacaoNome = false;
  } else {
    nomeDigitado.classList.remove("erro-preenchimento");
    nomeDigitado.classList.add("sucesso-preenchimento");

    mensagemErro[0].classList.remove("ativar-msg-erro");
    validacaoNome = true;
  }

  if (emailDigitado.value === "" || !validacaoDeEmail(emailDigitado.value)) {
    emailDigitado.classList.add("erro-preenchimento");

    mensagemErro[1].classList.add("ativar-msg-erro");
    validacaoEmail = false;
  } else {
    emailDigitado.classList.remove("erro-preenchimento");
    emailDigitado.classList.add("sucesso-preenchimento");

    mensagemErro[1].classList.remove("ativar-msg-erro");
    validacaoEmail = true;
  }

  if (telefoneDigitado.value.length <= 9) {
    telefoneDigitado.classList.add("erro-preenchimento");

    mensagemErro[2].classList.add("ativar-msg-erro");
    validacaoTelefone = false;
  } else {
    telefoneDigitado.classList.remove("erro-preenchimento");
    telefoneDigitado.classList.add("sucesso-preenchimento");

    mensagemErro[2].classList.remove("ativar-msg-erro");
    validacaoTelefone = true;
  }

  if (mensagemDigitada.value === "") {
    mensagemDigitada.classList.add("erro-preenchimento");

    mensagemErro[3].classList.add("ativar-msg-erro");
    validacaoMensagem = false;
  } else {
    mensagemDigitada.classList.remove("erro-preenchimento");
    mensagemDigitada.classList.add("sucesso-preenchimento");

    mensagemErro[3].classList.remove("ativar-msg-erro");
    validacaoMensagem = true;
  }
}

function validacaoDeEmail(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );
  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}

function cadastrar() {
  if (
    validacaoNome &&
    validacaoEmail &&
    validacaoTelefone &&
    validacaoMensagem
  ) {
    alert("Formulário enviado com sucesso!");
  }
}
