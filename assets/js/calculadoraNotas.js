const notasAlumno = [6.5, 3.4, 7, 5.1, 1]
const notasAlumno2 = [3.3, 4.0, 5.1, 6, 1]

// para calcular las notas de un alumno
// debemos sumar todas sus notas
// luego, dividirlas por la cantidad de notas
// con el fin de sacar un promedio

function calcularPromedio(notas) {
    let suma = 0

    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i]
    }

    const promedio = suma / notas.length

    return promedio
}

function evaluarEstado(promedio) {
    if (promedio >= 4) {
        return "Aprobadooo!!"
    } else {
        return "Reprobadooo!! :D"
    }
}

function evaluarAlumno(notas) {
    const promedio = calcularPromedio(notas)
    const evaluacion = evaluarEstado(promedio)
    document.write("<h1>El alumno tiene nota: " + promedio + " y su estado es: " + evaluacion + "</h1>")
}

evaluarAlumno(notasAlumno)
evaluarAlumno(notasAlumno2)