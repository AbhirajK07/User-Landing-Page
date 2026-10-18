function showLoginMessage(icon, title, text) {
    if (window.Swal) {
        Swal.fire({ icon, title, text });
    } else {
        window.alert(`${title}\n${text}`);
    }
}

function validateLogin() {
    const form = document.forms[0];
    const identifier = form["identifier"].value.trim();
    const password = form["password"].value;

    if (!identifier) {
        showLoginMessage("error", "Username or email required", "Enter your username or email address to continue.");
        return false;
    }

    const isEmail = identifier.includes("@");
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);
    const validUsername = /^[a-zA-Z0-9._-]{3,20}$/.test(identifier);

    if ((isEmail && !validEmail) || (!isEmail && !validUsername)) {
        showLoginMessage(
            "warning",
            "Invalid username or email",
            "Enter a valid email address or a username with 3 to 20 letters, numbers, dots, underscores, or hyphens."
        );
        return false;
    }

    if (!password) {
        showLoginMessage("error", "Password required", "Enter your password to continue.");
        return false;
    }

    if (password.length < 8) {
        showLoginMessage("warning", "Password too short", "Password must be at least 8 characters long.");
        return false;
    }

    showLoginMessage("success", "Details validated", "Connect this form to your authentication service to sign in.");
    return false;
}
