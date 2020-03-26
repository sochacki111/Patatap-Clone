const CANVAS = document.getElementById('myCanvas');
const MIN_CIRCLE_RADIUS = 50;
const MAX_CIRCLE_RADIUS = 250;

// Register a hander for when a DOM is ready, since we cannot work with the canvas before that
window.onload = function() {
    /**
     * Paper.js needs install and setup
     */
    paper.install(window);
    paper.setup(CANVAS);
    generateRandomCircle();
};

function generateRandomPoint() {
    let canvasWidth = CANVAS.width;
    let canvasHeight = CANVAS.height;
    let x = Math.ceil(Math.random() * canvasWidth);
    let y = Math.ceil(Math.random() * canvasHeight);
    let point = new Point(x, y);

    return point;
}

function generateRandomCircleRadius() {
    let r = Math.ceil(Math.random() * MAX_CIRCLE_RADIUS + MIN_CIRCLE_RADIUS);

    return r;
}

function generateRandomCircle() {
    let circle = new Path.Circle(
        generateRandomPoint(),
        generateRandomCircleRadius()
    );
    circle.fillColor = Color.random();
}
