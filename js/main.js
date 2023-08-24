// let precioReales = document.getElementById("precio-real-usdt")
// const baseUrl = "https://api2.kamipay.io"
// let importeConsultar = "1"
//
//
// const consultarCotizacion = async (importe, parValor) => {
//     const response = await fetch(`${baseUrl}/v2/oracle?pair=${parValor}&type=charge&amount=${importe}`, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             "user" : "ucomex_test",
//             "token" : "0ec591e3-819b-4830-86a9-989db204d79c",
//         }
//     })
//
//     const resp = await response
//     console.log(resp.ok)
// }
//
// consultarCotizacion(importeConsultar, "USDTBRL")