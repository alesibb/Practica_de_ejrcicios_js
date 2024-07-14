function checkAge() {
  const age = document.getElementById('ageInput').value;
  const result = document.getElementById('result');

  if (age >= 18) {
      result.textContent = 'Ya puedes conducir.';
      result.style.color = 'green';
  } else if (age === "") {
      result.textContent = 'Por favor, introduce tu edad.';
      result.style.color = 'red';
  } else {
      result.textContent = 'Aún no puedes conducir.';
      result.style.color = 'red';
  }
}
