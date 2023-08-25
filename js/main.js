let precioReales = document.getElementById("precio-real-usdt")
const checksBox = document.querySelectorAll('input[type="checkbox"]')
const btnRecargar = document.getElementById("btn-recargar")
const btnConsultar = document.getElementById("btn-consultar")
const inputValor = document.getElementById("input-valor")
const alert = document.querySelector("footer .alert")
const valorConvertir = document.getElementById("valorAConvertir")

let parValor = null

// Parametros para llamada a la API
const baseUrl = "https://api2.kamipay.io"
let importeConsultar = "1"


const consultarCotizacion = async (importe, parValor) => {
    const response = await fetch(`${baseUrl}/v2/oracle?pair=${parValor}&type=charge&amount=${importe}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "user" : "ucomex_test",
            "token" : "0ec591e3-819b-4830-86a9-989db204d79c",
        }
    })

    const resp = await response.json()
    return resp
}


const addEventsChecksboxs = () => {

    checksBox.forEach(check_element => {
        check_element.addEventListener("click", e => {
            const clickedCheck = e.target
            const idCheck = clickedCheck.id

            if (clickedCheck.checked) {
                // console.log(`Presionaste el check: ${idCheck} --- ${idCheck}`)
                parValor = idCheck
            } else {
                parValor = null
            }
        })
    })
}

btnConsultar.addEventListener("click", () => {
    if(!inputValor.value || !parValor){
        return
    }
    const mount = inputValor.value
    valorConvertir.textContent = `$ ${mount}`
})




// addEventsChecksboxs()
// iniciarOraculo()
// consultarCotizacion(importeConsultar, "USDTBRL")