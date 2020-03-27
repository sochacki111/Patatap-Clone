const CANVAS = document.getElementById('myCanvas');
const MIN_CIRCLE_RADIUS = 50;
const MAX_CIRCLE_RADIUS = 250;
const CIRCLE_COLOR_HUE_CHANGING_RATE = 7;
const CIRCLE_SCALING_DOWN_RATE = 0.98;

const KEYS = 'qwertyuiopasdfghjklzxcvbnm'.split('');
const FILES = ['bubbles', 'clay', 'confetti', 'corona', 'dotted-spiral', 'flash-1', 'flash-2', 'flash-3',
               'glimmer', 'moon', 'pinwheel', 'piston-1', 'piston-2', 'piston-3', 'prism-1', 'prism-2',
               'prism-3', 'splits', 'squiggle', 'strike', 'suspension', 'timer', 'ufo', 'veil', 'wipe', 'zig-zag'].map(el => [`assets/sounds/${el}.mp3`]);

const KEY_DATA = {}

const data = KEYS.forEach((el, index) => {
    KEY_DATA[el] = {
        sound: new Howl({
            src: FILES[index]
        })
    }
})

// Register a hander for when a DOM is ready, since we cannot work with the canvas before that
window.onload = function() {
    /**
     * Paper.js needs install and setup
     */
    paper.install(window);
    paper.setup(CANVAS);
};

document.addEventListener('keypress', function(event) {
    // If pressed key is in range of [a-z]
    if (event.charCode >= 97 && event.charCode <= 122) {
        generateRandomCircle();
        KEY_DATA[event.key].sound.play();
    }
});

function generateRandomCircle() {
    const circle = new Path.Circle(
        generateRandomPoint(),
        generateRandomCircleRadius()
    );
    circle.fillColor = Color.random();
    // Each frame, change the fill color and the scale of the circle
    circle.onFrame = function(event) {
        this.fillColor.hue += CIRCLE_COLOR_HUE_CHANGING_RATE;
        this.scale(CIRCLE_SCALING_DOWN_RATE);
    };
}

function generateRandomPoint() {
    const canvasWidth = CANVAS.width;
    const canvasHeight = CANVAS.height;
    const x = Math.ceil(Math.random() * canvasWidth);
    const y = Math.ceil(Math.random() * canvasHeight);
    return new Point(x, y);
}

function generateRandomCircleRadius() {
    return Math.ceil(Math.random() * MAX_CIRCLE_RADIUS + MIN_CIRCLE_RADIUS);
}
