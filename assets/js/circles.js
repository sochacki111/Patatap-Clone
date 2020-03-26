const CANVAS = document.getElementById('myCanvas');
const MIN_CIRCLE_RADIUS = 50;
const MAX_CIRCLE_RADIUS = 250;
const CIRCLE_COLOR_HUE = 7;
const CIRCLE_SCALE = 0.98;

// Register a hander for when a DOM is ready, since we cannot work with the canvas before that
window.onload = function() {
    /**
     * Paper.js needs install and setup
     */
    paper.install(window);
    paper.setup(CANVAS);
};

document.addEventListener('keypress', function(event) {
    console.log(event.code);
    console.log(event.charCode);
    if (event.charCode >= 97 && event.charCode <= 122) {
        generateRandomCircle();
    }
});

function generateRandomCircle() {
    let circle = new Path.Circle(
        generateRandomPoint(),
        generateRandomCircleRadius()
    );
    circle.fillColor = Color.random();
    // Each frame, change the fill color of the circle
    circle.onFrame = function(event) {
        circle.fillColor.hue += CIRCLE_COLOR_HUE;
        circle.scale(CIRCLE_SCALE);
    };
}

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
