// 1. Seleciona os elementos do HTML
const emailInput = document.getElementById('email-input');
const senhaInput = document.getElementById('senha-input');
const loginButton = document.getElementById('login-btn');

// 2. Adiciona um ouvinte de evento para o clique no botão
loginButton.addEventListener('click', function() {
    
    // Pega os valores digitados pelo usuário
    const emailDigitado = emailInput.value;
    const senhaDigitada = senhaInput.value;

    // 3. Verifica se o email e a senha estão corretos
    if (emailDigitado === 'admin@email.com' && senhaDigitada === 'senha123') {
        // Ação se o login estiver correto
        alert('Login realizado com sucesso!');
        // Exemplo: redirecionar para outra página
        // window.location.href = '/pagina-principal.html'; 
    } else {
        // Ação se o login estiver incorreto
        alert('E-mail ou senha incorretos. Tente novamente.');
    }
});
