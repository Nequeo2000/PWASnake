let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = Math.floor(window.innerWidth / 10) * 10;
canvas.height = Math.floor(window.innerHeight / 10) * 10;

let snakeBrain = {
    "00000000": [100, 100, 100, 100], "00000001": [100, 100, 100, 100], "00000010": [100, 100, 100, 100], "00000011": [100, 100, 100, 100], "00000100": [100, 100, 100, 100], "00000101": [100, 100, 100, 100], "00000110": [100, 100, 100, 100], "00000111": [100, 100, 100, 100], "00001000": [100, 100, 100, 100], "00001001": [100, 100, 100, 100], "00001010": [100, 100, 100, 100], "00001011": [100, 100, 100, 100], "00001100": [100, 100, 100, 100], "00001101": [100, 100, 100, 100], "00001110": [100, 100, 100, 100], "00001111": [100, 100, 100, 100], "00010000": [100, 100, 100, 100], "00010001": [100, 100, 100, 100], "00010010": [100, 100, 100, 100], "00010011": [100, 100, 100, 100], "00010100": [100, 100, 100, 100], "00010101": [100, 100, 100, 100], "00010110": [100, 100, 100, 100], "00010111": [100, 100, 100, 100], "00011000": [100, 100, 100, 100], "00011001": [100, 100, 100, 100], "00011010": [100, 100, 100, 100], "00011011": [100, 100, 100, 100], "00011100": [100, 100, 100, 100], "00011101": [100, 100, 100, 100], "00011110": [100, 100, 100, 100], "00011111": [100, 100, 100, 100], "00100000": [100, 100, 100, 100], "00100001": [100, 100, 100, 100], "00100010": [100, 100, 100, 100], "00100011": [100, 100, 100, 100], "00100100": [100, 100, 100, 100], "00100101": [100, 100, 100, 100], "00100110": [100, 100, 100, 100], "00100111": [100, 100, 100, 100], "00101000": [100, 100, 100, 100], "00101001": [100, 100, 100, 100], "00101010": [100, 100, 100, 100], "00101011": [100, 100, 100, 100], "00101100": [100, 100, 100, 100], "00101101": [100, 100, 100, 100], "00101110": [100, 100, 100, 100], "00101111": [100, 100, 100, 100], "00110000": [100, 100, 100, 100], "00110001": [100, 100, 100, 100], "00110010": [100, 100, 100, 100], "00110011": [100, 100, 100, 100], "00110100": [100, 100, 100, 100], "00110101": [100, 100, 100, 100], "00110110": [100, 100, 100, 100], "00110111": [100, 100, 100, 100], "00111000": [100, 100, 100, 100], "00111001": [100, 100, 100, 100], "00111010": [100, 100, 100, 100], "00111011": [100, 100, 100, 100], "00111100": [100, 100, 100, 100], "00111101": [100, 100, 100, 100], "00111110": [100, 100, 100, 100], "00111111": [100, 100, 100, 100], "01000000": [100, 100, 100, 100], "01000001": [100, 100, 100, 100], "01000010": [100, 100, 100, 100], "01000011": [100, 100, 100, 100], "01000100": [100, 100, 100, 100], "01000101": [100, 100, 100, 100], "01000110": [100, 100, 100, 100], "01000111": [100, 100, 100, 100], "01001000": [100, 100, 100, 100], "01001001": [100, 100, 100, 100], "01001010": [100, 100, 100, 100], "01001011": [100, 100, 100, 100], "01001100": [100, 100, 100, 100], "01001101": [100, 100, 100, 100], "01001110": [100, 100, 100, 100], "01001111": [100, 100, 100, 100], "01010000": [100, 100, 100, 100], "01010001": [100, 100, 100, 100], "01010010": [100, 100, 100, 100], "01010011": [100, 100, 100, 100], "01010100": [100, 100, 100, 100], "01010101": [100, 100, 100, 100], "01010110": [100, 100, 100, 100], "01010111": [100, 100, 100, 100], "01011000": [100, 100, 100, 100], "01011001": [100, 100, 100, 100], "01011010": [100, 100, 100, 100], "01011011": [100, 100, 100, 100], "01011100": [100, 100, 100, 100], "01011101": [100, 100, 100, 100], "01011110": [100, 100, 100, 100], "01011111": [100, 100, 100, 100], "01100000": [100, 100, 100, 100], "01100001": [100, 100, 100, 100], "01100010": [100, 100, 100, 100], "01100011": [100, 100, 100, 100], "01100100": [100, 100, 100, 100], "01100101": [100, 100, 100, 100], "01100110": [100, 100, 100, 100], "01100111": [100, 100, 100, 100], "01101000": [100, 100, 100, 100], "01101001": [100, 100, 100, 100], "01101010": [100, 100, 100, 100], "01101011": [100, 100, 100, 100], "01101100": [100, 100, 100, 100], "01101101": [100, 100, 100, 100], "01101110": [100, 100, 100, 100], "01101111": [100, 100, 100, 100], "01110000": [100, 100, 100, 100], "01110001": [100, 100, 100, 100], "01110010": [100, 100, 100, 100], "01110011": [100, 100, 100, 100], "01110100": [100, 100, 100, 100], "01110101": [100, 100, 100, 100], "01110110": [100, 100, 100, 100], "01110111": [100, 100, 100, 100], "01111000": [100, 100, 100, 100], "01111001": [100, 100, 100, 100], "01111010": [100, 100, 100, 100], "01111011": [100, 100, 100, 100], "01111100": [100, 100, 100, 100], "01111101": [100, 100, 100, 100], "01111110": [100, 100, 100, 100], "01111111": [100, 100, 100, 100], "10000000": [100, 100, 100, 100], "10000001": [100, 100, 100, 100], "10000010": [100, 100, 100, 100], "10000011": [100, 100, 100, 100], "10000100": [100, 100, 100, 100], "10000101": [100, 100, 100, 100], "10000110": [100, 100, 100, 100], "10000111": [100, 100, 100, 100], "10001000": [100, 100, 100, 100], "10001001": [100, 100, 100, 100], "10001010": [100, 100, 100, 100], "10001011": [100, 100, 100, 100], "10001100": [100, 100, 100, 100], "10001101": [100, 100, 100, 100], "10001110": [100, 100, 100, 100], "10001111": [100, 100, 100, 100], "10010000": [100, 100, 100, 100], "10010001": [100, 100, 100, 100], "10010010": [100, 100, 100, 100], "10010011": [100, 100, 100, 100], "10010100": [100, 100, 100, 100], "10010101": [100, 100, 100, 100], "10010110": [100, 100, 100, 100], "10010111": [100, 100, 100, 100], "10011000": [100, 100, 100, 100], "10011001": [100, 100, 100, 100], "10011010": [100, 100, 100, 100], "10011011": [100, 100, 100, 100], "10011100": [100, 100, 100, 100], "10011101": [100, 100, 100, 100], "10011110": [100, 100, 100, 100], "10011111": [100, 100, 100, 100], "10100000": [100, 100, 100, 100], "10100001": [100, 100, 100, 100], "10100010": [100, 100, 100, 100], "10100011": [100, 100, 100, 100], "10100100": [100, 100, 100, 100], "10100101": [100, 100, 100, 100], "10100110": [100, 100, 100, 100], "10100111": [100, 100, 100, 100], "10101000": [100, 100, 100, 100], "10101001": [100, 100, 100, 100], "10101010": [100, 100, 100, 100], "10101011": [100, 100, 100, 100], "10101100": [100, 100, 100, 100], "10101101": [100, 100, 100, 100], "10101110": [100, 100, 100, 100], "10101111": [100, 100, 100, 100], "10110000": [100, 100, 100, 100], "10110001": [100, 100, 100, 100], "10110010": [100, 100, 100, 100], "10110011": [100, 100, 100, 100], "10110100": [100, 100, 100, 100], "10110101": [100, 100, 100, 100], "10110110": [100, 100, 100, 100], "10110111": [100, 100, 100, 100], "10111000": [100, 100, 100, 100], "10111001": [100, 100, 100, 100], "10111010": [100, 100, 100, 100], "10111011": [100, 100, 100, 100], "10111100": [100, 100, 100, 100], "10111101": [100, 100, 100, 100], "10111110": [100, 100, 100, 100], "10111111": [100, 100, 100, 100], "11000000": [100, 100, 100, 100], "11000001": [100, 100, 100, 100], "11000010": [100, 100, 100, 100], "11000011": [100, 100, 100, 100], "11000100": [100, 100, 100, 100], "11000101": [100, 100, 100, 100], "11000110": [100, 100, 100, 100], "11000111": [100, 100, 100, 100], "11001000": [100, 100, 100, 100], "11001001": [100, 100, 100, 100], "11001010": [100, 100, 100, 100], "11001011": [100, 100, 100, 100], "11001100": [100, 100, 100, 100], "11001101": [100, 100, 100, 100], "11001110": [100, 100, 100, 100], "11001111": [100, 100, 100, 100], "11010000": [100, 100, 100, 100], "11010001": [100, 100, 100, 100], "11010010": [100, 100, 100, 100], "11010011": [100, 100, 100, 100], "11010100": [100, 100, 100, 100], "11010101": [100, 100, 100, 100], "11010110": [100, 100, 100, 100], "11010111": [100, 100, 100, 100], "11011000": [100, 100, 100, 100], "11011001": [100, 100, 100, 100], "11011010": [100, 100, 100, 100], "11011011": [100, 100, 100, 100], "11011100": [100, 100, 100, 100], "11011101": [100, 100, 100, 100], "11011110": [100, 100, 100, 100], "11011111": [100, 100, 100, 100], "11100000": [100, 100, 100, 100], "11100001": [100, 100, 100, 100], "11100010": [100, 100, 100, 100], "11100011": [100, 100, 100, 100], "11100100": [100, 100, 100, 100], "11100101": [100, 100, 100, 100], "11100110": [100, 100, 100, 100], "11100111": [100, 100, 100, 100], "11101000": [100, 100, 100, 100], "11101001": [100, 100, 100, 100], "11101010": [100, 100, 100, 100], "11101011": [100, 100, 100, 100], "11101100": [100, 100, 100, 100], "11101101": [100, 100, 100, 100], "11101110": [100, 100, 100, 100], "11101111": [100, 100, 100, 100], "11110000": [100, 100, 100, 100], "11110001": [100, 100, 100, 100], "11110010": [100, 100, 100, 100], "11110011": [100, 100, 100, 100], "11110100": [100, 100, 100, 100], "11110101": [100, 100, 100, 100], "11110110": [100, 100, 100, 100], "11110111": [100, 100, 100, 100], "11111000": [100, 100, 100, 100], "11111001": [100, 100, 100, 100], "11111010": [100, 100, 100, 100], "11111011": [100, 100, 100, 100], "11111100": [100, 100, 100, 100], "11111101": [100, 100, 100, 100], "11111110": [100, 100, 100, 100], "11111111": [100, 100, 100, 100]
};
let snake = [];
let apple = [
    Math.floor(Math.random() * canvas.width / 10) * 10,
    Math.floor(Math.random() * canvas.height / 10) * 10
];
let inputHistory = [];
let stepCount = 0;

function draw() {
    // get next move
    move();

    // draw background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // draw snake and apple
    for (let i = 0; i < snake.length; i++) {
        let tile = snake[i];
        ctx.fillStyle = `rgb(${0},${255 - i * (200 / snake.length)},${0})`;
        ctx.fillRect(tile[0], tile[1], 10, 10);
    }
    ctx.fillStyle = "red";
    ctx.fillRect(apple[0], apple[1], 10, 10);

    requestAnimationFrame(draw);
}
resetSnake();
requestAnimationFrame(draw);

function move() {
    let inputs = getInputs().toString().replaceAll(",", "");
    updateHistory(inputs);
    let output = snakeBrain[inputs].indexOf(Math.max(...snakeBrain[inputs]));
    let prediction = [0, 0];
    if (output == 0)
        prediction[0] = 10;
    if (output == 1)
        prediction[0] = -10;
    if (output == 2)
        prediction[1] = 10;
    if (output == 3)
        prediction[1] = -10;

    let newPosition = [snake[0][0] + prediction[0], snake[0][1] + prediction[1]];
    snake = [newPosition, ...snake];

    // check if hit wall
    if (snake[0][0] < 0 || snake[0][1] < 0 || snake[0][0] > canvas.width-10 || snake[0][1] > canvas.height-10) {
        resetSnake();
        rewardSnake(-1);
        stepCount = 0;
        return;
    }

    // check if snake hit tail
    let hitTail = false;
    for (let i = 1; i < snake.length; i++) {
        let tile = snake[i];
        if (tile[0] == newPosition[0] && tile[1] == newPosition[1]) {
            hitTail = true;
            break;
        }
    }

    if (newPosition[0] == apple[0] && newPosition[1] == apple[1]) {
        apple = [];
        apple[0] = Math.floor(Math.random() * canvas.width / 10) * 10;
        apple[1] = Math.floor(Math.random() * canvas.height / 10) * 10;
        rewardSnake(1);
        stepCount = 0;
    }
    else if (hitTail) {
        snake = snake.slice(0, 3);
        rewardSnake(-1);
        stepCount = 0;
    }
    else {
        snake.pop();
    }

    stepCount++;
    if (stepCount > 2 * (canvas.width / 10 + canvas.height / 10)) {
        rewardSnake(-1);
        //stepCount = 0;
    }
}

function getInputs() {
    let inputs = [];

    // apple in sight?
    inputs.push((snake[0][0] == apple[0] && snake[0][1] < apple[1]) ? 1 : 0);
    inputs.push((snake[0][0] == apple[0] && snake[0][1] > apple[1]) ? 1 : 0);
    inputs.push((snake[0][1] == apple[1] && snake[0][0] < apple[0]) ? 1 : 0);
    inputs.push((snake[0][1] == apple[1] && snake[0][0] > apple[0]) ? 1 : 0);

    // next to tail or wall?
    let arr = [
        (snake[0][0] > canvas.width - 10) ? 1 : 0,
        (snake[0][0] == 0) ? 1 : 0,
        (snake[0][1] > canvas.height - 10) ? 1 : 0,
        (snake[0][1] == 0) ? 1 : 0
    ];
    for (let i = 1; i < snake.length; i++) {
        if (snake[0][0] + 10 == snake[i][0] && snake[0][1] == snake[i][1]) {
            arr[0] = 1;
            break;
        }
    }
    for (let i = 1; i < snake.length; i++) {
        if (snake[0][0] - 10 == snake[i][0] && snake[0][1] == snake[i][1]) {
            arr[0] = 1;
            break;
        }
    }
    for (let i = 1; i < snake.length; i++) {
        if (snake[0][1] + 10 == snake[i][1] && snake[0][0] == snake[i][0]) {
            arr[0] = 1;
            break;
        }
    }
    for (let i = 1; i < snake.length; i++) {
        if (snake[0][1] - 10 == snake[i][1] && snake[0][0] == snake[i][0]) {
            arr[0] = 1;
            break;
        }
    }
    inputs.push(arr[0]);
    inputs.push(arr[1]);
    inputs.push(arr[2]);
    inputs.push(arr[3]);

    return inputs;
}

function rewardSnake(n) {
    for (let i = 0; i < inputHistory.length; i++) {
        let inputs = inputHistory[i];
        let output = snakeBrain[inputs].indexOf(Math.max(...snakeBrain[inputs]))
        snakeBrain[inputHistory[i]][output] += n * Math.pow(10, -i);
    }
}

function resetSnake() {
    let center = [Math.floor(canvas.width/20)*10,Math.floor(canvas.height/20)*10];
    snake = [center, [center[0],center[1]+1]];
}

function updateHistory(newValue){
    inputHistory = [...inputHistory.slice(0,4)];
    let doubleIndex = inputHistory.indexOf(newValue);
    if(doubleIndex != -1){
        inputHistory = [newValue, ...(inputHistory.slice(0,doubleIndex)), ...(inputHistory.slice(doubleIndex+1))];
    } else {
        inputHistory = [newValue, ...inputHistory.slice(0, 4)];
    }
}







const registerServiceWorker = () => {
    if ("serviceWorker" in navigator) {
        try {
            navigator.serviceWorker.register("/sw.js").then(e => { console.log(e) });

        } catch (error) {
            console.error(`Registration failed with ${error}`);
        }
    }
};
registerServiceWorker();
