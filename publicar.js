'use strict'

const id = localStorage.getItem("idPerfil")
console.log(id)


document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form-publicacao');

  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();

      const descricao = document.getElementById('descricao').value.trim();
      const local = document.getElementById('local').value.trim();
      const imagem = document.getElementById('imagem').value.trim();
      const dataPublicacao = new Date().toLocaleDateString('pt-BR');
      const idUsuario = `${id}`

      if (!descricao || !local || !imagem || !dataPublicacao || !idUsuario) {
        alert('Por favor, preencha todos os campos!');
        return;
      }

      const novaPublicacao = {
        descricao,
        local,
        imagem,
        dataPublicacao,
        idUsuario
      };

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
  } 
});
