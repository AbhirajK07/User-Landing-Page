function validateform() {

    var name = document.forms[0]["name"].value.trim();
    var username = document.forms[0]["username"].value.trim();
    var emailField = document.forms[0]["email"];
    var email = emailField.value.trim();
    var contact = document.forms[0]["contact"].value.trim();
    var password = document.forms[0]["pass"].value;

    // Name Validation
    if (name == "") {
        Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Name cannot be blank"
        });
        return false;
    }

    if (username == "") {
        Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Username cannot be blank"
        });
        return false;
    }

    if (!/^[a-zA-Z0-9._-]{3,20}$/.test(username)) {
        Swal.fire({
            icon: "warning",
            title: "Invalid Username!",
            text: "Use 3 to 20 letters, numbers, dots, underscores, or hyphens"
        });
        return false;
    }

    // Email Validation
    if (email == "") {
        Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "E-mail cannot be blank"
        });
        return false;
    }

    emailField.value = email;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        Swal.fire({
            icon: "warning",
            title: "Invalid E-mail!",
            text: "Enter an email address in the correct format, such as name@example.com"
        });
        return false;
    }

    // Contact Validation
    if (contact == "") {
        Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Contact number cannot be blank"
        });
        return false;
    }

    if (contact.length != 10) {
        Swal.fire({
            icon: "warning",
            title: "Invalid Number!",
            text: "Contact number must contain exactly 10 digits"
        });
        return false;
    }

    // Password Validation
    if (password == "") {
        Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Password cannot be blank"
        });
        return false;
    }

    if (password.length < 8) {
        Swal.fire({
            icon: "warning",
            title: "Weak Password!",
            text: "Password must be at least 8 characters long"
        });
        return false;
    }

    // Success Message
    Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        text: "Your form has been submitted successfully.",
        confirmButtonText: "Awesome!"
    });

    return false;
}
