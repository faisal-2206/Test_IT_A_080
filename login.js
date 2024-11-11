function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (username === "faisal_2206" && password === "Faisal@123") {
        message.style.color = "green";
        message.textContent = "Login successful!";
        
        
        setTimeout(() => {
            window.location.href = "Dashboard.html"; 
        }, 1000);

    } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password.";
    }
}
