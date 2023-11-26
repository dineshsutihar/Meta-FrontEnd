// Get the canvas and context
let canvas = document.getElementById('my_canvas');
let context = canvas.getContext('2d');

// Define the ball parameters
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let ballRadius = 10;

// Function to draw the ball
function drawBall() {
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI*2);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
}

// Function to move the ball
function moveBall() {
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}

// Function to animate the ball
function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    moveBall();
    requestAnimationFrame(animate);
}

// Start the animation
animate();