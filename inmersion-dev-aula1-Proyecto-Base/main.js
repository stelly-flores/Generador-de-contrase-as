let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");
let botonLimpiar = document.getElementById("limpiar");

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnrstuvwxyz0123456789!@#$%^&*()';

function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    
    // Validar que el número de caracteres sea al menos 8
    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor o igual a 8 para que sea segura.");
        return; // Detener la ejecución si la condición no se cumple
    }

    let password = '';

    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }
    
    contrasena.value = password;

    // Validar la contraseña generada inmediatamente después de generarla
    validar(password);
}

function esContrasenaSegura(contrasena) {
    const tieneMayusculas = /[A-Z]/.test(contrasena);
    const tieneMinusculas = /[a-z]/.test(contrasena);
    const tieneNumeros = /[0-9]/.test(contrasena);
    const tieneCaracteresEspeciales = /[!@#$%^&*()]/.test(contrasena);

    return {
        esSegura: tieneMayusculas && tieneMinusculas && tieneNumeros && tieneCaracteresEspeciales,
        tieneMayusculas,
        tieneMinusculas,
        tieneNumeros,
        tieneCaracteresEspeciales
    };
}

function validar(password) {
    const resultadoValidacion = esContrasenaSegura(password);

    if (resultadoValidacion.esSegura) {
        alert("La contraseña es fuerte.");
    } else {
        let mensaje = "La contraseña generada no es segura. Necesita:";
        if (!resultadoValidacion.tieneMayusculas) {
            mensaje += "\n- Al menos una letra mayúscula.";
        }
        if (!resultadoValidacion.tieneMinusculas) {
            mensaje += "\n- Al menos una letra minúscula.";
        }
        if (!resultadoValidacion.tieneNumeros) {
            mensaje += "\n- Al menos un número.";
        }
        if (!resultadoValidacion.tieneCaracteresEspeciales) {
            mensaje += "\n- Al menos un carácter especial.";
        }
        alert(mensaje);
    }
}

function limpiar() {
    contrasena.value = ''; // Limpia el campo de contraseña
    cantidad.value = '';   // Limpia el campo de cantidad
}

// Asegúrate de añadir un evento al botón para llamar a la función generar y limpiar.
boton.addEventListener('click', generar);
botonLimpiar.addEventListener('click', limpiar);















