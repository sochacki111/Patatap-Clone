const CANVAS = document.getElementById('myCanvas');

// Register a hander for when a DOM is ready, since we cannot work with the canvas before that
window.onload = function() {
    /**
     * Paper.js needs install and setup
     */
    paper.install(window);
    paper.setup(CANVAS);
    var myCircle = new Path.Circle(generateRandomPoint(), 50);
    myCircle.fillColor = 'red';
};

function generateRandomPoint() {
    let canvasWidth = CANVAS.width;
    let canvasHeight = CANVAS.height;
    let x = Math.ceil(Math.random() * canvasWidth);
    let y = Math.ceil(Math.random() * canvasHeight);

    return new Point(x,y);
}

function generateRandomColor() {

}

function generateRandomCircleSize() {
    
}