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


function irParaPublicar() {
    window.location.href = "publicar.html"; // substitua pelo link desejado
  }