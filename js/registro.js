let msgName = "Debes ingresar tu nombre";
let msgEmail = "Debes ingresar el email";
let msgInvalidEmail = "Email no válido";
let msgPass = "Debes ingresar contraseña";
let msgMatch = "Las contraseñas no coinciden";

function togglePassword(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);

    if (input.type === "password") {
        input.type = "text";
        icon.classList.replace("fa-eye-slash", "fa-eye");
    } else {
        input.type = "password";
        icon.classList.replace("fa-eye", "fa-eye-slash");
    }
}

document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("input-name").value;
    const email = document.getElementById("input-email").value;
    const pass = document.getElementById("input-password").value;
    const confirm = document.getElementById("input-confirm").value;

    const errorBox = document.getElementById("error-box");

    let errors = [];

    if (name.trim() === "") errors.push(msgName);
    if (email.trim() === "") errors.push(msgEmail);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !regex.test(email)) errors.push(msgInvalidEmail);

    if (pass.trim() === "") errors.push(msgPass);
    if (pass !== confirm) errors.push(msgMatch);

    if (errors.length > 0) {
        errorBox.innerHTML = errors.join("<br>");
        errorBox.classList.remove("d-none");
    } else {
        errorBox.classList.add("d-none");

        const modal = new bootstrap.Modal(document.getElementById("registerSuccessModal"));
        modal.show();
    }
});

function goToLogin() {
    window.location.href = "login.html";
}