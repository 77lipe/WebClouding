'use strict'

document.getElementById("reqForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let wordKey = document.getElementById("palavra").value;

    const url = "https://back-spider.vercel.app/user/RememberPassword";

    const recupSenha = {
        email,
        wordKey
    }

    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },     
        body: JSON.stringify(recupSenha)
    
    }

    

    try {
        const responseUser = await fetch(url, options);
        const data =  await responseUser.json()

        const id = data.id
       

        localStorage.setItem("id", JSON.stringify(id));

        if (responseUser.status === 200) {
            window.location.href = "redefSenha.html";
            alert('Verificação realizada com sucesso!');
        } else {
            alert('Erro ao encontrar email ou palavra-chave.');
        }
    } catch (error) {
        console.error("Erro ao conectar à API:", error);
        alert('Erro de conexão com o servidor.');
    }

})