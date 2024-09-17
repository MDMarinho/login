document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errormessage = document.getElementById('error-message');

    
    errormessage.textContent = '';

    
    if (username === '' || password === '') {
        errormessage.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

   
    if (username === 'user' && password === 'password') {
        alert('Login bem-sucedido!');
        
    } else {
        errormessage.textContent = 'Usuário ou senha incorretos.';
    }
});
