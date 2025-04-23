const botaoMensagem = document.querySelector('.botao');
        let mensagemOriginal = botaoMensagem.textContent; // Guarda a mensagem original

        botaoMensagem.addEventListener('click', function() {
            if (botaoMensagem.textContent === mensagemOriginal) {
                botaoMensagem.textContent = 'Mensagem exibida!';
            } else {
                botaoMensagem.textContent = mensagemOriginal; // Volta para a mensagem original no próximo clique
            }
        });


