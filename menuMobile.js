let hamburguerImg = document.querySelector('.hamburguer__img')
let botaoFechar = document.querySelector('.botao__fechar')
let lateral = document.querySelector('.lateral')

hamburguerImg.addEventListener('click', function() {
    lateral.style.right = '0'
})

botaoFechar.addEventListener('click', function(){
    lateral.style.right = '-360px'

})

