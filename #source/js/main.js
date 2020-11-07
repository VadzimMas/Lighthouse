
// @prepros -prepend lazysizes.min.js
// @prepros -prepend jquery-3.5.1.min.js
// @prepros-prepend parallax.js
// @prepros -prepend slick.js
// @prepros -prepend slick-settings.js



var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

window.onorientationchange = function () {
    var orientation = window.orientation;
    switch (orientation) {
        case 0:
        case 90: window.location.reload();
        case -90: window.location.reload();
            break;
    }
};