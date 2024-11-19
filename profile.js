document.addEventListener("DOMContentLoaded", () => {
    // Получаем имя пользователя из localStorage
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
        // Если пользователь залогинен, отображаем его имя
        document.getElementById("username").textContent = loggedInUser;
    } else {
        // Если нет, редиректим на страницу входа
        window.location.href = 'login.html';
    }
});
