'use strict'




const id = localStorage.getItem("idPerfil")
console.log(id)

async function listarUsers() {
    const url = `https://back-spider.vercel.app/user/listarUsers`
    const response = await fetch(url)
    const data = await response.json()
    return data
    // console.log(data)
}



async function getDados() {

    const name = document.getElementById("nomePerfil")
    const img = document.getElementById("imgPerfil")

    const data = await listarUsers()

    data.forEach(user => {
        if (user.id == id) {
            const resultado = {
                id: user.id,
                name: user.nome,
                imagem: user.imagemPerfil
            }

            console.log(resultado)

            name.textContent = resultado.name
            img.style.backgroundImage = `url('${resultado.imagem}')`

            return resultado
        }
        
    })

}

document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("home-btn");
  
    botao.addEventListener("click", function() {
      window.location.href = "home.html"; // Altere para a URL desejada
    });
  });


getDados()










