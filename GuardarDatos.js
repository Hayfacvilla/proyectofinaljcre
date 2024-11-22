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

        // Obtener los datos guardados en localStorage
        const storedUser = localStorage.getItem("user");

        // Verificar si los datos coinciden
        if (storedUser) {
            const user = JSON.parse(storedUser);
            // Si el email y la contraseña coinciden, redirigir a usuario.html
            if (user.email === email && user.password === password) {
                window.location.href = "paginaUsuario.html"; // Redirige a la página de usuario

            } else {
                alert("Datos incorrectos. Intenta de nuevo.");
            }
        } else {
            alert("No se ha encontrado ningún usuario registrado.");
        }
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

        // Redirigir al formulario de inicio de sesión sin mensaje
        window.location.href = "login.html"; // Cambiar esta URL al formulario de login
    });
});
