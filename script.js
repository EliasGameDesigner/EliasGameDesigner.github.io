

function abrirPag(a){
    console.log(a)
    console.log("FOi")
    let localPag = document.querySelector('html')
    let pag = new XMLHttpRequest()

    pag.onreadystatechange = () =>{
        if(pag.readyState == 4 && pag.status == 200){
            localPag.innerHTML = pag.response
        }
    }

    pag.open('GET', `Projetos/${a}.html`)
    pag.send()
}




function voltar(a){
    console.log(a)
    console.log("FOi")
    let localPag = document.querySelector('html')
    let pag = new XMLHttpRequest()

    pag.onreadystatechange = () =>{
        if(pag.readyState == 4 && pag.status == 200){
            localPag.innerHTML = pag.response
        }
    }

    pag.open('GET', `${a}`)
    pag.send()
}