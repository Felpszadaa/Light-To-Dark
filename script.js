let ball = document.getElementById("toggleBall")
let counter = 1

ball.addEventListener('click', changeMode)

function changeMode() {
    counter++
    if(counter % 2 == 0) {
        ball.style.transform = 'translateX(-35px)'
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    } else  {
        ball.style.transform = 'translateX(0px)'
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }
}