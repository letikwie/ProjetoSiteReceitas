document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todos os botões de navegação
    const botoes = document.querySelectorAll('.btn-personalizado');
    
    // 2. Seleciona todas as seções de conteúdo (home, salgada, doce, galeria)
    const secoes = document.querySelectorAll('.secao');

    function trocarAba(evento) {
        // Previne comportamento padrão se fosse um link
        evento.preventDefault();

        const botaoClicado = evento.currentTarget;
        const alvoId = botaoClicado.getAttribute('data-alvo'); // Ex: 'home', 'salgada'

        // --- Passo A: Limpeza (Reset) ---
        // Remove a classe 'ativo' de todos os botões
        botoes.forEach(btn => btn.classList.remove('ativo'));
        
        // Remove a classe 'ativa' de todas as seções (esconde tudo)
        secoes.forEach(secao => secao.classList.remove('ativa'));

        // --- Passo B: Ativação ---
        // Adiciona cor no botão clicado
        botaoClicado.classList.add('ativo');

        // Busca a seção pelo ID (ex: procura <section id="salgada">)
        const secaoAlvo = document.getElementById(alvoId);
        
        if (secaoAlvo) {
            // Mostra a seção alvo
            secaoAlvo.classList.add('ativa');
            console.log(`Sucesso: Seção '${alvoId}' ativada.`);
        } else {
            console.error(`Erro: Não encontrei uma seção com id="${alvoId}"`);
        }
    }

    // 3. Adiciona o evento de clique em cada botão
    botoes.forEach(botao => {
        botao.addEventListener('click', trocarAba);
    });

    // 4. Inicialização: Garante que a aba marcada como 'ativo' no HTML já comece aberta
    const botaoInicial = document.querySelector('.btn-personalizado.ativo');
    if (botaoInicial) {
        // Dispara um clique falso no botão que já está marcado como ativo no HTML
        botaoInicial.click();
    } else if (botoes.length > 0) {
        // Se nenhum estiver marcado, clica no primeiro
        botoes[0].click();
    }
});