'use strict'

document.getElementById("registerForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let premium = document.getElementById("check").checked; // Checkbox para status premium
    let imagemPerfil = document.getElementById("img").value;
    let senhaRecuperacao = document.getElementById("palavra").value;

    const url = "https://back-spider.vercel.app/user/cadastrarUser";
    
    const novoUsuario = {
        nome,
        email,
        senha,
        premium,
        imagemPerfil,
        senhaRecuperacao
    };

    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },     
        body: JSON.stringify(novoUsuario)
    };

    try {
        const responseUser = await fetch(url, options);
        console.log(responseUser)

        if (responseUser.status === 201) {
            window.location.href = "login.html";
            alert('Cadastro realizado com sucesso!');
        } else {
            alert('Erro ao cadastrar usuário.');
        }
    } catch (error) {
        console.error("Erro ao conectar à API:", error);
        alert('Erro de conexão com o servidor.');
    }
    

});