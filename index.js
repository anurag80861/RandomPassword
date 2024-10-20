const btn = document.getElementById("genPass")
const newPass = document.getElementById("newPass")
const slider = document.getElementById("range")
const rangeVal = document.getElementById("rangeVal")


const upperCase = document.getElementById("caplet")
const lowerCase = document.getElementById("smalet")
const numberCheckbox = document.getElementById("number")
const symbol  = document.getElementById("symbol")
const copyBtn =document.getElementById('copyBtn')
let finalStr = '';
rangeVal.innerText = slider.value

slider.addEventListener("input", (e) => {
    rangeVal.innerText = e.target.value
})

btn.addEventListener('click', () => {
    let capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let smallLetter = "abcdefghijklmnopqrstuvwxyz";
    let numberStr = "0123456789";
    let symbolsStr = "~`!@#$%^&*()_+{}";
   
    if (upperCase.checked) {
        finalStr += capitalLetter;
    }
    if (lowerCase.checked) {
        finalStr += smallLetter;
    }

    if (numberCheckbox.checked) {
        finalStr += numberStr;
    }
    if (symbol.checked) {
        finalStr += symbolsStr;
    }
    if(finalStr === ''){
        alert("please select and given checkbox")
        return;
    }

   console.log(finalStr)

    let latestPass = '';


    for (let i = 0; i < slider.value; i++) {
        let randomNum = Math.floor(Math.random() * finalStr.length)
        latestPass += finalStr.charAt(randomNum)
    }

    newPass.innerText = `${latestPass}`
})
copyBtn.addEventListener("click",()=>{
    window.navigator.clipboard.writeText(newPass.innerText)
})