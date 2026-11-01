
const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = Number(document.getElementById("age").value);
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const errorMessage = document.getElementById("errorMessage");

    errorMessage.textContent = "";

    if (!name || !email || !phone || !password) {
        errorMessage.textContent = "Please fill in all fields.";
        return;
    }

    if (!Number.isInteger(age) || age < 1 || age > 120) {
        errorMessage.textContent = "Please enter a valid age.";
        return;
    }

    if (password.length < 8) {
        errorMessage.textContent = "Password must contain at least 8 characters.";
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return;
    }

    document.getElementById("formCard").classList.add("hidden");

    document.getElementById("successCard").classList.remove("hidden");

});
