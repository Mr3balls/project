document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const timeButton = document.getElementById("timeButton");
    const timeDisplay = document.getElementById("timeDisplay");
    const logoutButton = document.getElementById("logoutButton");
    const welcomeMessage = document.getElementById("welcomeMessage");

    // Проверка на наличие имени пользователя в localStorage
    const userData = JSON.stringify(localStorage.getItem('userData'));
    const username = userData ? userData.username : null;

    // Приветственное сообщение 
    if (username && !localStorage.getItem('greetingShown')) {
        const now = new Date();
        const hours = now.getHours();
        let greeting;

        if (hours < 12) {
            greeting = "Доброе утро";
        } else if (hours < 18) {
            greeting = "Добрый день";
        } else {
            greeting = "Добрый вечер";
        }

        welcomeMessage.textContent = `Добро пожаловать, ${username}! ${greeting} на сайте Kaz Travel Experts!`;
        localStorage.setItem('greetingShown', 'true'); // Установить флаг, чтобы приветствие показалось только один раз
    }

    // Смена темы
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        localStorage.setItem('theme', document.body.classList.contains("dark-theme") ? 'dark' : 'light');
    });

    // Восстановление темы при загрузке страницы
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add("dark-theme");
    }

    // Отображение текущего времени
    if (timeButton) {
        timeButton.addEventListener("click", () => {
            const now = new Date();
            timeDisplay.textContent = `Текущее время: ${now.toLocaleTimeString()}`;
        });
    }

    // Навигация с помощью стрелок
    document.addEventListener("keydown", (event) => {
        const currentItem = document.querySelector(".nav-item.active");
        if (event.key === "ArrowRight") {
            if (currentItem) {
                const nextItem = currentItem.nextElementSibling || document.querySelector(".nav-item:first-child");
                currentItem.classList.remove("active");
                nextItem.classList.add("active");
                nextItem.querySelector("a").focus();
            } else {
                const firstItem = document.querySelector(".nav-item:first-child");
                firstItem.classList.add("active");
                firstItem.querySelector("a").focus();
            }
        } else if (event.key === "ArrowLeft") {
            if (currentItem) {
                const prevItem = currentItem.previousElementSibling || document.querySelector(".nav-item:last-child");
                currentItem.classList.remove("active");
                prevItem.classList.add("active");
                prevItem.querySelector("a").focus();
            } else {
                const lastItem = document.querySelector(".nav-item:last-child");
                lastItem.classList.add("active");
                lastItem.querySelector("a").focus();
            }
        }
    });

    // Звездный рейтинг с воспроизведением звука
    const stars = document.querySelectorAll(".star");
    stars.forEach(star => {
        star.addEventListener("click", () => {
            const rating = star.dataset.value;
            alert(`Вы оценили сервис на ${rating} звезды!`);
            const sound = new Audio("C:/Users/User/Desktop/htmlweb/sound/7ddf02d658682f1.mp3"); // Замените на путь к вашему звуку
            sound.play();
        });
    });

    // Логика выхода
    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            localStorage.removeItem('userData');
            localStorage.removeItem('greetingShown');
            alert("Вы вышли из системы!");
            window.location.href = 'login.html';
        });
    }
});