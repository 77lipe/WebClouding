'use strict'



document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;    


    const url = "https://back-spider.vercel.app/login"
        
    const login = {
        email,
        senha
    }


    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },     
        body: JSON.stringify(login)
    }

    


    try {
        const responseUser = await fetch(url, options) 
        const data = await responseUser.json()


        const idPerfil = data.user.id
        console.log(idPerfil)

    
        localStorage.setItem("idPerfil", idPerfil);


        if (responseUser.status === 200) {
            window.location.href = "perfil.html";
            alert('Login realizado com sucesso!')
        } else {
            alert('Erro ao encontrar email ou palavra-chave.');
        }

    } catch (error) {
        console.error("Erro ao conectar à API:", error);
        alert('Erro de conexão com o servidor.');
    }
    
    


});


