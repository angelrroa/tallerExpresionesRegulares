let email = prompt("Por favor, ingresa tu correo electrónico:");
let emailValido = false;

while (!emailValido) {
    if (email === null) {
        break;
    }
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email)) {
        console.log("El correo electrónico ingresado es válido.");
        emailValido = true;
    } else {
        console.error("El correo electrónico ingresado no es válido.");
        email = prompt("Por favor, ingresa tu correo electrónico:");
    }
}