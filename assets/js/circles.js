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
    paper.view.draw();
};

function generateRandomPoint() {
    let canvasHeight = CANVAS.height;
    let canvasWidth = CANVAS.width;

    return new Point(100,100);
}
