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
    Toastify({
        text: "Login realizado com sucesso!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#4CAF50"
    }).showToast();

    window.location.href = "perfil.html";
} else {
    Toastify({
        text: "Erro ao encontrar email ou palavra-chave.",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#FF6347"
    }).showToast();
}

} catch (error) {
    console.error("Erro ao conectar à API:", error);
    Toastify({
        text: "Erro de conexão com o servidor.",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#FF6347"
    }).showToast();
}
    
    


});


