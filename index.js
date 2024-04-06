const handleDigitClick =(event)=>{

    const display = document.querySelector(".display")
    const textNum = display.textContent

    if(textNum.length < 9){
        const Num = event.target.textContent
        document.querySelector(".display").textContent += Num
    }
}

  document.querySelector("#btn-0").addEventListener("click", handleDigitClick)
  document.querySelector("#btn-1").addEventListener("click", handleDigitClick)
  document.querySelector("#btn-2").addEventListener("click", handleDigitClick)
  document.querySelector("#btn-3").addEventListener("click", handleDigitClick)
  document.querySelector("#btn-4").addEventListener("click", handleDigitClick)
  document.querySelector("#btn-5").addEventListener("click", handleDigitClick)
  document.querySelector("#btn-6").addEventListener("click", handleDigitClick)
  document.querySelector("#btn-7").addEventListener("click", handleDigitClick)
  document.querySelector("#btn-8").addEventListener("click", handleDigitClick)
  document.querySelector("#btn-9").addEventListener("click", handleDigitClick)