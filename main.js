//variaveis
let randomNumber = Math.round(Math.random()*10)
let xAttempts = 1
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const inputNumber = document.querySelector('#inputNumber')
const messageError = document.querySelector('.alert-error')

//Eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", handleKey)

//funçõs callback
function handleTryClick(event){
  event.preventDefault()

  function closeMessage() {
    inputNumber.oninput = () => {
      messageError.classList.remove('open')
    }
  }

  

  if (!Number(inputNumber.value) && Number(inputNumber.value)!=0 )  {
    messageError.innerText="Por favor insira um número!"
    messageError.classList.add("open")
     closeMessage()
  }
  

  else if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 ) {
    
    messageError.innerText="Por favor insira um número de 0 a 10!"
    messageError.classList.add("open")
    closeMessage()
  }

  else if (Number(inputNumber.value)== randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`
  }

  inputNumber.value = "" //para limpar o campo, sempre que não acerto
  xAttempts++
}


function handleResetClick(event){
  toggleScreen()

  xAttempts = 1
  randomNumber = Math.round(Math.random()*10)
}

// Outras funcções
function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}


function handleKey(e){
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}

