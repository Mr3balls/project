document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registrationForm");
    const registrationMessage = document.getElementById("registrationMessage");

    registrationForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value; // Получаем значение пароля

        // Сохранение данных 
        const userData = { username, email, password };
        localStorage.setItem('userData', JSON.stringify(userData));

        
        registrationMessage.textContent = `Спасибо за регистрацию, ${username}!`;
        registrationForm.reset(); 
    });
});
