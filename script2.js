document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startButton').addEventListener('click', function() {
        let cadenas = [];
        let cadena;

        while (true) {
            cadena = prompt("Introduce una cadena de texto (pulsa 'Cancelar' para terminar):");

            if (cadena === null) {
                break;
            }

            cadenas.push(cadena);
        }

        const resultado = cadenas.join('-');
        document.getElementById('result').innerText = resultado;
    });
});