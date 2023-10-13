const container = document.querySelector('.container')
const containerImagemPrincipal = document.querySelectorAll('.container__imagem-principal')


let i = 0
function carrossel() {
    i++

    if (i >= containerImagemPrincipal.length) {
        i = 0
    }

   
    container.style.transform = `translateX(${-i * 100}vw)`

}

setInterval(carrossel, 3000)