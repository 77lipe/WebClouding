'use strict'



document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    let email = document.querySelector("input[placeholder='Email']").value;
    let senha = document.querySelector("input[placeholder='Senha']").value;    

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


    const responseUser = await fetch(url, options) 

    console.log(responseUser);
    


    if(responseUser.status == 200){
        alert('Login realizado com sucesso!')
    }


});


