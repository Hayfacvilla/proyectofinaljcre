document.addEventListener("DOMContentLoaded", () => {
    // Obtener los formularios
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registroForm");

    // Manejar el formulario de inicio de sesión
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        // Obtener los valores de los campos
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        // Guardar los valores en el localStorage
        localStorage.setItem("loginEmail", email);
        localStorage.setItem("loginPassword", password);

        alert("Datos de inicio de sesión guardados en localStorage");
    });

    // Manejar el formulario de registro
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        // Obtener los valores de los campos
        const name = document.getElementById("registronombre").value;
        const email = document.getElementById("registroEmail").value;
        const username = document.getElementById("registroUsuario").value;
        const password = document.getElementById("registroPassword").value;
        const gender = document.getElementById("registroGenero").value;

        // Crear un objeto para guardar los datos
        const user = {
            name,
            email,
            username,
            password,
            gender
        };

        // Guardar el objeto en el localStorage como un string JSON
        localStorage.setItem("user", JSON.stringify(user));

        alert("Datos de registro guardados en localStorage");
    });
});
