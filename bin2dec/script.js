const form = document.querySelector("form")
const binaryInput = form.querySelector("input#binaryNumber")
const decimalInput = form.querySelector("input#decimalNumber")
const binaryLabel = form.querySelector("label[for='binaryNumber']")
const decimalLabel = form.querySelector("label[for='decimalNumber']")

let binary = binaryInput.value
let decimal = decimalInput.value

function validateBinary() {
    let invalidBinaryText = document.querySelectorAll("p.invalidNumber")[0]
    binary = binaryInput.value
    binaryRegex = /^[01]+$/

    if (binary === "") {
        return
    }

    if (binaryRegex.test(binary)) {
        invalidBinaryText.style.display = "none"
    }

    if (!binaryRegex.test(binary)) {
        invalidBinaryText.style.display = "inline"
        binaryInput.value = binary.replace(/[^0-1]/g, "")
    }
}

function validateDecimal() {
    let invalidDecimalText = document.querySelectorAll("p.invalidNumber")[1]
    decimal = decimalInput.value
    decimalRegex = /^[0-9]+$/

    if (decimal === "") {
        return
    }

    if (decimalRegex.test(decimal)) {
        invalidDecimalText.style.display = "none"
    }

    if (!decimalRegex.test(decimal)) {
        invalidDecimalText.style.display = "inline"
        decimalInput.value = decimal.replace(/[^0-9]/g, "")
    }
}

function convertBase() {
    binaryInput.addEventListener("keyup", (e) => {
        if (binary.length > 0) {
            let convertedBinary = parseInt(binary, 2)
            if (isNaN(convertedBinary)) {
                decimalInput.value = ""
            } else {
                decimalInput.value = convertedBinary
            }
        }

        if (binary.length === 0) {
            decimalInput.value = ""
        }
    })

    decimalInput.addEventListener("keyup", (e) => {
        if (decimal.length > 0) {
            decimal = parseInt(decimal)
            let convertedDecimal = decimal.toString(2)
            if (isNaN(convertedDecimal)) {
                binaryInput.value = ""
            } else {
                binaryInput.value = convertedDecimal
            }
        }

        if (decimal.length === 0) {
            binaryInput.value = ""
        }
    })
}

convertBase()
