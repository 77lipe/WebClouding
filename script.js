'use strict'
function login(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if(username && password){
        alert('Login realizado com sucesso')
    }else{
        alert('Preencha todos os campos!!')
    }
}

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.querySelector("input[placeholder='Usuário']");
    let email = document.querySelector("input[placeholder='Email']");
    let password = document.querySelector("input[placeholder='Senha']");
    let keyword = document.querySelector("input[placeholder='Palavra-Chave']");

    if (!username || !email || !password || !keyword) {
        alert("Preencha todos os campos!");
        return;
    }
    alert("Registro realizado com sucesso!");
    window.location.href = "login.html"; // Redireciona para o login

});

const data = {
    email: email,
    senha: password
}