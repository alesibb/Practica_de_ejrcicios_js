function calculateDNILetter() {
    const dniNumber = document.getElementById('dni-number').value;
    const dniLetters = "TRWAGMYFPDXBNJZSQVHLCKE";
    let resultElement = document.getElementById('result');

    if (dniNumber === null) {
        resultElement.textContent = "Proceso cancelado por el usuario.";
        return;
    }

    if (isNaN(dniNumber) || dniNumber < 0 || dniNumber > 99999999) {
        alert("Por favor, introduce un número válido entre 0 y 99999999.");
        return;
    }

    const letterIndex = dniNumber % 23;
    const dniLetter = dniLetters[letterIndex];
    resultElement.textContent = `La letra de tu DNI es: ${dniLetter}`;
}
