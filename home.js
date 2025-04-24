'use strict'

async function getPublicacoes() {
    const response = await fetch('https://back-spider.vercel.app/publicacoes/listarPublicacoes');
    const publicacoes = await response.json();
    const container = document.getElementById('container-card');


    for (const pub of publicacoes) {
        // Busca o nome do usuário com base no idUsuario
        try {
            const usuarioRes = await fetch(`https://back-spider.vercel.app/user/pesquisarUser/${pub.idUsuario}`);
            const usuarioData = await usuarioRes.json();

            if (usuarioData?.id === pub.idUsuario) {
                pub.idUsuario = usuarioData.nome; // Substitui idUsuario pelo nome do usuário
            } else {
                pub.idUsuario = "VOZES DA CABEÇA"
            }
        } catch (error) {
            console.error(`Erro ao buscar usuário ${pub.idUsuario}:`, error);
            // Se falhar, mantemos o ID como fallback
        }
    }



    publicacoes.forEach(pub => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = pub.id; // Adiciona ID ao dataset

        // Imagem da publicação
        const imagem = document.createElement('img')
        imagem.src = pub.imagem
        imagem.classList.add('card-img')

        // data de Publicacao
        const dataPublicacao = document.createElement('pa')
        dataPublicacao.textContent = pub.dataPublicacao

        // Descrição
        const descricao = document.createElement('p');
        descricao.textContent = pub.descricao;

        // Local
        const local = document.createElement('x');
        local.innerHTML = `Local: ${pub.local}`;

        // Usuário
        const usuario = document.createElement('h2');
        usuario.innerHTML = pub.idUsuario;



        // Monta o card
        card.appendChild(usuario);
        card.appendChild(imagem);
        card.appendChild(descricao);
        card.appendChild(local);
        card.appendChild(dataPublicacao);



        // Adiciona o card ao container
        container.appendChild(card);
    });
}

getPublicacoes()

// Evento para o formulário de nova publicação
form.addEventListener('submit', event => {
    event.preventDefault();

    const descricao = document.getElementById('descricao').value.trim();
    const local = document.getElementById('local').value.trim();
    const imagem = document.getElementById('imagem').value.trim();
    const dataPublicacao = new Date().toLocaleDateString('pt-BR'); // Data atual no formato dd/mm/yyyy
    const idUsuario = 2; // Exemplo de idUsuario, pode ser dinâmico conforme sua lógica

    // Validação dos campos obrigatórios
    if (!descricao || !local || !imagem || !dataPublicacao || !idUsuario) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const novaPublicacao = {
        descricao,
        local,
        imagem,
        dataPublicacao,
        idUsuario // Corrigido para o nome correto do campo
    };

    // Depuração: mostra no console o que será enviado
    console.log('Enviando publicação:', novaPublicacao);

    fetch('https://back-spider.vercel.app/publicacoes/cadastrarPublicacao', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(novaPublicacao)
    })
        .then(async response => {
            if (!response.ok) {
                const erroDetalhado = await response.json();
                console.error('Erro detalhado do servidor:', erroDetalhado);
                throw new Error('Erro ao cadastrar publicação');
            }
            return response.json();
        })
        .then(() => {
            alert('Publicação cadastrada com sucesso!');
            form.reset();
            carregarPublicacoes();
        })
        .catch(error => {
            console.error('Erro ao cadastrar publicação:', error);
        });
});


