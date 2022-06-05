var pontuacao = 0
var contar = 0
const score = document.querySelector('.score')
const mario = document.querySelector(".mario")
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const jump = () => {
    mario.classList.add("jump")

    setTimeout(() =>{
        mario.classList.remove("jump")
    }, 500)

}

const loop = setInterval(() => {
    const pipePosition = +pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudsPosition = clouds.offsetLeft

    console.log(pipePosition)
    

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'css/imagens/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        clearInterval(loop)
    
    }
    if(pipePosition === 104 || pipePosition === 1){
        pontuacao++
        score.innerHTML = `Score: ${pontuacao}`
    }
}, 10);



document.addEventListener("keydown", jump)

