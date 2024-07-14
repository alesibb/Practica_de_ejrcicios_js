function mostrarCalificacion() {
    const nota = parseFloat(document.getElementById('nota').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(nota) || nota < 0 || nota > 10) {
        resultado.textContent = "Por favor, ingrese una nota válida entre 0 y 10.";
        resultado.style.color = "red";
        return;
    }

    let calificacion;

    if (nota >= 0 && nota < 3) {
        calificacion = "Muy deficiente";
    } else if (nota >= 3 && nota < 5) {
        calificacion = "Insuficiente";
    } else if (nota >= 5 && nota < 6) {
        calificacion = "Suficiente";
    } else if (nota >= 6 && nota < 7) {
        calificacion = "Bien";
    } else if (nota >= 7 && nota < 9) {
        calificacion = "Notable";
    } else if (nota >= 9 && nota <= 10) {
        calificacion = "Sobresaliente";
    }

    resultado.textContent = `Calificación: ${calificacion}`;
    resultado.style.color = "black";
}
