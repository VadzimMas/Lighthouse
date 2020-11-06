
// @prepros -prepend lazysizes.min.js
// @prepros -prepend jquery-3.5.1.min.js
// @prepros-prepend parallax.js
// @prepros -prepend slick.js
// @prepros -prepend slick-settings.js



// var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene);

let wrapper = document.getElementsByClassName("wrapper")[0];
let wave = document.getElementsByClassName("wave");


wrapper.classList.add("active");


setTimeout(() => {
    for (let i = 0; i < wave.length; i++) {
        let w = wave[i].getElementsByClassName("img-w")[0];
        w.style.transition = "none";
    }
}, 10000);


