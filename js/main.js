let precioReales = document.getElementById("precio-real-usdt")
const checksBox = document.querySelectorAll('input[type="checkbox"]')
const btnRecargar = document.getElementById("btn-recargar")
const btnConsultar = document.getElementById("btn-consultar")
const inputValor = document.getElementById("input-valor")
const alert = document.querySelector("footer .alert")

const valorConvertir = document.getElementById("valorAConvertir")
const valorConvertido = document.getElementById("valorConvertido")
let rate = document.getElementById("rate")
let spiner = document.getElementById("spiner")

let parValor = null

// Parametros para llamada a la API
const baseUrl = "https://api2.kamipay.io"


const consultarCotizacion = async (importe, parValor) => {
    spiner.classList.remove("d-none")
    spiner.classList.add("d-block")
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
                parValor = idCheck
            } else {
                parValor = null
            }
        })
    })
}

btnConsultar.addEventListener("click", async () => {
    if(!inputValor.value || !parValor){
        return
    }
    const mount = inputValor.value
    valorConvertir.textContent = `$ ${mount}`

    const responseOraculo = await consultarCotizacion(mount, parValor)
    inputValor.value = ""
    spiner.classList.remove("d-block")
    spiner.classList.add("d-none")

    rate.textContent = responseOraculo.data.rate

    switch (parValor) {
        case "USDTBRL":
            valorConvertido.textContent = responseOraculo.data.total_brl
            break
        case "BRLUSDT":
            valorConvertido.textContent = responseOraculo.data.total_usdt
            break
        case "ARSBRL":
            valorConvertido.textContent = responseOraculo.data.total_brl
            break
        case "BRLARS":
            valorConvertido.textContent = responseOraculo.data.total_ars
            break
        case "USDTARS":
            valorConvertido.textContent = responseOraculo.data.total_ars
            break
    }
})



addEventsChecksboxs()
// iniciarOraculo()
// consultarCotizacion(importeConsultar, "USDTBRL")