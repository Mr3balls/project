$(document).ready(function () {
     if (localStorage.getItem('loggedInUser')) {
        window.location.href = 'index.html'; 
    }

    
    $('#login-form').on('submit', function (e) {
        e.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();

        
        const validUsername = 'user123';
        const validPassword = 'password123';

        if (username === validUsername && password === validPassword) {
            localStorage.setItem('loggedInUser', username);
            window.location.href = 'index.html'; 
            $('#login-btn').addClass('d-none');
        } else {
            $('#error-message').text('Invalid username or password.'); 
        }
    });
});

