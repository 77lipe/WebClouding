'use strict'

document.getElementById("formRedefinirSenha").addEventListener("submit", async function (event) {
    event.preventDefault();

    let senha = document.getElementById("novaSenha").value;
    let confirmarSenha = document.getElementById("confirmarSenha").value


    let id = JSON.parse(localStorage.getItem("id"));
    // pegar do local storage aqui


    const url = `https://back-spider.vercel.app/user/newPassword/${id}`

    const redefSenha = {
        senha
    }

    const options = {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },     
        body: JSON.stringify(redefSenha)
    
    }

    console.log(id)

    try {

        if (confirmarSenha != senha){
            alert('As senhas inseridas não coincidem!')
        }else{
            const responseUser = await fetch(url, options);
        console.log(responseUser)

        if (responseUser.status === 200) {
            window.location.href = "login.html";
            alert('Verificação realizada com sucesso!');
        } else {
            alert('Erro ao encontrar email ou palavra-chave.');
        }
        }
            

        
    } catch (error) {
        console.error("Erro ao conectar à API:", error);
        alert('Erro de conexão com o servidor.');
    }

})

