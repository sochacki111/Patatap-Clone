const CANVAS = document.getElementById('myCanvas');
const MIN_CIRCLE_RADIUS = 50;
const MAX_CIRCLE_RADIUS = 250;
const CIRCLE_COLOR_HUE_CHANGING_RATE = 7;
const CIRCLE_SCALING_DOWN_RATE = 0.98;
const KEY_DATA = {
    q: {
        sound: new Howl({
            src: ['assets/sounds/bubbles.mp3']
        })
    },
    w: {
        sound: new Howl({
            src: ['assets/sounds/clay.mp3']
        })
    },
    e: {
        sound: new Howl({
            src: ['assets/sounds/confetti.mp3']
        })
    },
    r: {
        sound: new Howl({
            src: ['assets/sounds/corona.mp3']
        })
    },
    t: {
        sound: new Howl({
            src: ['assets/sounds/dotted-spiral.mp3']
        })
    },
    y: {
        sound: new Howl({
            src: ['assets/sounds/flash-1.mp3']
        })
    },
    u: {
        sound: new Howl({
            src: ['assets/sounds/flash-2.mp3']
        })
    },
    i: {
        sound: new Howl({
            src: ['assets/sounds/flash-3.mp3']
        })
    },
    o: {
        sound: new Howl({
            src: ['assets/sounds/glimmer.mp3']
        })
    },
    p: {
        sound: new Howl({
            src: ['assets/sounds/moon.mp3']
        })
    },
    a: {
        sound: new Howl({
            src: ['assets/sounds/pinwheel.mp3']
        })
    },
    s: {
        sound: new Howl({
            src: ['assets/sounds/piston-1.mp3']
        })
    },
    d: {
        sound: new Howl({
            src: ['assets/sounds/piston-2.mp3']
        })
    },
    f: {
        sound: new Howl({
            src: ['assets/sounds/prism-1.mp3']
        })
    },
    g: {
        sound: new Howl({
            src: ['assets/sounds/prism-2.mp3']
        })
    },
    h: {
        sound: new Howl({
            src: ['assets/sounds/prism-3.mp3']
        })
    },
    j: {
        sound: new Howl({
            src: ['assets/sounds/splits.mp3']
        })
    },
    k: {
        sound: new Howl({
            src: ['assets/sounds/squiggle.mp3']
        })
    },
    l: {
        sound: new Howl({
            src: ['assets/sounds/strike.mp3']
        })
    },
    z: {
        sound: new Howl({
            src: ['assets/sounds/suspension.mp3']
        })
    },
    x: {
        sound: new Howl({
            src: ['assets/sounds/timer.mp3']
        })
    },
    c: {
        sound: new Howl({
            src: ['assets/sounds/ufo.mp3']
        })
    },
    v: {
        sound: new Howl({
            src: ['assets/sounds/veil.mp3']
        })
    },
    b: {
        sound: new Howl({
            src: ['assets/sounds/wipe.mp3']
        })
    },
    n: {
        sound: new Howl({
            src: ['assets/sounds/zig-zag.mp3']
        })
    },
    m: {
        sound: new Howl({
            src: ['assets/sounds/moon.mp3']
        })
    }
};
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
    let circle = new Path.Circle(
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
