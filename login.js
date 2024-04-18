// login.js
$(document).ready(function() {
    $('#loginForm').submit(function(e) {
        e.preventDefault(); // Prevent form submission

        const email = $('#emailForSignIn').val();
        const password = $('#passwordForSignIn').val();

        $.ajax({
            type: 'POST',
            url: 'login.php', // Replace with your server-side authentication script
            data: {
                username: email,
                password: password
            },
            success: function(data) {
                // Process the result (e.g., redirect to the next page)
            },
            error: function(xhr, status, error) {
                console.error('Login failed:', error);
            }
        });
    });
});


