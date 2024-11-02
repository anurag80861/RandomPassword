const btn = document.getElementById("genPass");
const newPass = document.getElementById("newPass");
const slider = document.getElementById("range");
const rangeVal = document.getElementById("rangeVal");

const upperCase = document.getElementById("caplet");
const lowerCase = document.getElementById("smalet");
const numberCheckbox = document.getElementById("number");
const symbol = document.getElementById("symbol");
const copyBtn = document.getElementById('copyBtn');

// Set initial range value display
rangeVal.innerText = slider.value;

// Update range value display when slider changes
slider.addEventListener("input", (e) => {
    rangeVal.innerText = e.target.value;
});

btn.addEventListener('click', () => {
    // Reset finalStr for each new password generation
    let finalStr = '';
    let capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let smallLetter = "abcdefghijklmnopqrstuvwxyz";
    let numberStr = "0123456789";
    let symbolsStr = "~`!@#$%^&*()_+{}";
    
    // Add characters to finalStr based on selected checkboxes
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

    // Alert if no checkboxes are selected
    if (finalStr === '') {
        alert("Please select at least one checkbox.");
        return;
    }

    // Initialize an empty password
    let latestPass = '';
    function generatePass(){
        for (let i = 0; i < slider.value; i++) {
            let randomNum = Math.floor(Math.random() * finalStr.length);
            latestPass += finalStr.charAt(randomNum);
        }
        if (upperCase.checked && !/[A-Z]/.test(latestPass)) {
            latestPass=""
            generatePass()
        }
        if (lowerCase.checked && !/[a-z]/.test(latestPass)) {
            latestPass=""
            generatePass()
        }
        if (numberCheckbox.checked && !/[0-9]/.test(latestPass)) {
            latestPass=""
            generatePass()
        }
        if (symbol.checked) {
            let isContain = false
            for(let i of latestPass){
                if(symbolsStr.includes(i)){
                    isContain= true
                }
            }
            if(!isContain){
                latestPass=""
                generatePass()
            }
        }
    }
    generatePass()
    // Generate the password with the selected length
    
    newPass.innerText = `${latestPass}`;
});

// Copy password to clipboard
copyBtn.addEventListener("click", () => {
    if (newPass.innerText !== '') {
        window.navigator.clipboard.writeText(newPass.innerText);
        alert("Password copied to clipboard!");
    } else {
        alert("No password to copy.");
    }
});
