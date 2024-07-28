// camerawork.js
// ©️ toperri

var bpm = 100;
var curBeat = 0;
var zoom = 1;
const lerp = (x, y, a) => x * (1 - a) + y * a; // credits to trysmudford.com!

var mode = "SCALE"; // customize this to "ZOOM" if you want to use zoom instead of scale

document.body.style.overflowX = "hidden";

function zoomReg() {
    zoom = lerp(1, zoom, 0.95);
    if (mode == "SCALE") {
        document.body.style.scale = zoom;
    }
    else if (mode == "ZOOM") {
        document.body.style.zoom = zoom;
    }
    else {
        console.error("not a valid mode!");
    }
}
function init(bpm, fps) {
    this.bpm = bpm;

    setInterval(zoomReg, 1000 / fps);

    setInterval(function () {
        curBeat++;
        if (curBeat % 4 == 0) {
            zoom += 0.035;
        }
    }, 60000 / bpm);
}

window.camera = {};
window.camera.init = init;