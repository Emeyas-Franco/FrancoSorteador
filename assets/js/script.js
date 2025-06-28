const sortear = document.getElementById("sortear")

function sorteador(min, max) {

  min = parseInt(document.querySelector("#input-min").value)
  max = parseInt(document.querySelector("#input-max").value)
  const h2Result = document.querySelector("#h2result")


  if (!isNaN(min) && !isNaN(max)) {
    if (min > max) {
      h2Result.innerHTML = `<h2>O valor mínimo não pode ser maior que o máximo!</h2>`
      return
    }
    const result = Math.floor(Math.random() * (max - min + 1)) + min
    h2Result.innerHTML = `<h2>O número sorteado é: ${result}</h2>`
  } else {
    h2Result.innerHTML = `<h2>Por favor, preencha os dois campos com números válidos.</h2>`
  }
}

sortear.addEventListener('click', sorteador)