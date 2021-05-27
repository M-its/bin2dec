window.onload = function() {
let textarea = document.getElementsByTagName("textarea")

    for (let i = 0; i < textarea.length; i++) {
        changePlaceholder(textarea[i])
        textarea[i].setAttribute("onkeyup", "changePlaceholder(this)")

    }
}

function getNumbers() {
    let binary = document.getElementById("binaryInput")
    let decimal = document.getElementById("decimalInput")
    let buttonConvert = document.querySelector("button#btnSubmit")

    decimal.value = parseInt(binary.value, 2)
    binary.value = (decimal.value >>> 0).toString(2)
}


function changePlaceholder(state) {
    if (state.value === ''){
        state.classList.remove("normal")
        state.classList.add("centralized")
    } else {
        state.classList.remove("centralized")
        state.classList.add("normal")
    }
}

//checar se o valor digitado é um número 
function checkTextareaBinaryValue(event) {
    let keyPressed = event || window.event
    let key = keyPressed.keyCode || keyPressed.which

    key = String.fromCharCode( key )

    let regex = /^[0-1.]+$/

    if( !regex.test(key) ) {
        if(keyPressed.preventDefault) {
            keyPressed.preventDefault()
        }
    }
}

function checkTextareaDecimalValue(event) {
    let keyPressed = event || window.event
    let key = keyPressed.keyCode || keyPressed.which

    key = String.fromCharCode( key )

    let regex = /^[0-9.]+$/

    if( !regex.test(key) ) {
        if(keyPressed.preventDefault) {
            keyPressed.preventDefault()
        }
    }
}