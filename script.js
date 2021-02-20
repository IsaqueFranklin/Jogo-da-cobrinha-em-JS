let canvas = document.getElementById("snake")
let context = canvas.getContext("2d")
let box = 32;
let snake = []
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

document.addEventListener('keydown', update);

function update(event){
    if(event.kewCode == 37 && direction != "right") direction = "left";
    if(event.kewCode == 38 && direction != "down") direction = "up";
    if(event.kewCode == 39 && direction != "left") direction = "right";
    if(event.kewCode == 40 && direction != "up") direction = "down";
}


function inciarJogo(){
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 * box && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].x = 0;
    if(snake[0].y < 0 * box && direction == "up") snake[0].x = 16 * box;


    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }

    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "riight") snakeX += box;
    if(direction == "left") snakeX -+ box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(inciarJogo, 100);

