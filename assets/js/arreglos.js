const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
]

const mesSeleccionado = prompt("¿En qué mes naciste? Ingresa un número del 1 al 12")
const mesSeleccionadoNumber = Number(mesSeleccionado)

if (!mesSeleccionadoNumber || mesSeleccionadoNumber <= 0 || mesSeleccionadoNumber > 12) {
    console.log("Por favor ingresa un número válido")
} else {
    console.log("El mes seleccionado es: " + meses[mesSeleccionadoNumber - 1])

    if (mesSeleccionadoNumber === 12 || mesSeleccionadoNumber === 1 || mesSeleccionadoNumber === 2) {
        console.log("Naciste en Verano")
    } else if (mesSeleccionadoNumber >= 3 && mesSeleccionadoNumber <= 5) {
        console.log("Naciste en Otoño")
    } else if (mesSeleccionadoNumber >= 6 && mesSeleccionadoNumber <= 8) {
        console.log("Naciste en Invierno")
    } else {
        console.log("Naciste en Primavera")
    }
}