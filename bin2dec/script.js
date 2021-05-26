window.onload = function() {
let textarea = document.getElementsByTagName("textarea")

    for (let i = 0; i < textarea.length; i++) {
        changePlaceholder(textarea[i])
        textarea[i].setAttribute("onkeyup", "changePlaceholder(this)")

        getNumbers(textarea[i])
        textarea[i].setAttribute("onkeyup", "getNumbers(this)")
    }
}

function getNumbers(numbers) {
    var binary = numbers.value
    var decimal = document.getElementById("decimalInput")

    if(binary != "") {
        decimal.value = parseInt(binary,2)
    }
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

function checkTextareaValue(event) {
    var keyPressed = event || window.event
    var key = keyPressed.keyCode || keyPressed.which

    key = String.fromCharCode( key )

    var regex = /^[0-1.]+$/

    if( !regex.test(key) ) {
        if(keyPressed.preventDefault) {
            keyPressed.preventDefault()
        }
    }
}