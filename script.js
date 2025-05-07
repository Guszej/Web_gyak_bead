document.getElementById("formid").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const age = parseInt(document.getElementById("age").value.trim(), 10);
    const message = document.getElementById("message").value.trim();

    let isValid = true;
    let errorMessage = "";

    if (name.length < 10) {
        isValid = false;
        errorMessage += "A névnek legalább 10 karakter hosszúnak kell lennie.\n";
    }
    if(age < 10 || age > 120){
        isValid = false;
        errorMessage += "Az életkor nem megfelelő.\n";
    }

    if (message.length < 10) {
        isValid = false;
        errorMessage += "A véleménynek legalább 10 karakter hosszúnak kell lennie.\n";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        errorMessage += "Kérlek, adj meg egy érvényes email címet.\n";
    }

    if (!isValid) {
        event.preventDefault();
        alert(errorMessage);
    }
});