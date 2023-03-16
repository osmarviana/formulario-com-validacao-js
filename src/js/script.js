const formulario = document.getElementById("formulario");
const inputText = document.querySelectorAll(".input");

inputText.forEach((input) => {
  formulario.addEventListener("submit", (event) => {
    // event.preventDefault();

    if (input.value === "") {
      console.log("PREENCHA!");

      input.classList.remove("sucesso-preenchimento");
      input.classList.add("erro-preenchimento");

      setErrorFor(input, "Campo obrigatório!");
    } else {
      console.log("Muito bem!");

      input.classList.add("sucesso-preenchimento");
      input.classList.remove("erro-preenchimento");

      setSuccessFor(input);
    }
  });
});

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}
