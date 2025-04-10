'use strict'


    // Espera a página carregar

    const id = localStorage.getItem("idPerfil");
    console.log(id)
    
    const url = `https://back-spider.vercel.app/user/listarUsers/${id}`

    const responseUser = fetch(url)

    const img = document.getElementById("imgPerfil")

   


    





