document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('response').style.display = 'block';
        document.getElementById('error').style.display = 'none';
    } else {
        document.getElementById('response').style.display = 'none';
        document.getElementById('error').style.display = 'block';
    }
});
