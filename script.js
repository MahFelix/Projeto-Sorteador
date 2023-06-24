function gerarButton() {

const max = Math.floor(document.querySelector('.input-max').value)
const min = Math.ceil(document.querySelector('.input-min').value)

const result =  Math.floor(Math.random() * (max - min +1)) + min;

function abrirAlert() {
  swal({
  title: `Parabéns! foi sorteado o número ${result}`,
  text: "Boa sorte!!",
  icon: "success",
  button: "Lucky!",
});
}

abrirAlert(result)
}




