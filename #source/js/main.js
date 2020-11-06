
// @prepros -prepend lazysizes.min.js
// @prepros -prepend jquery-3.5.1.min.js

// @prepros-prepend parallax.js

// @prepros -prepend slick.js
// @prepros -prepend slick-settings.js



let wrapper = document.getElementsByClassName("wrapper")[0];
let lighthouse = document.getElementsByClassName("parralax__liighthouse")[0].getElementsByClassName("img-l")[0];
let wave = document.getElementsByClassName("wave");
let rope1wrapper = document.getElementsByClassName("rope1-wrapper")[0];
let rope2wrapper = document.getElementsByClassName("rope2-wrapper")[0];
let rope3wrapper = document.getElementsByClassName("rope3-wrapper")[0];
let light1 = document.getElementsByClassName("light-1")[0];
let light2 = document.getElementsByClassName("light-2")[0];
let light3 = document.getElementsByClassName("light-3")[0];

wrapper.classList.add("active");
lighthouse.classList.add("active");
rope1wrapper.classList.add("active");
rope2wrapper.classList.add("active");
rope3wrapper.classList.add("active");
light1.classList.add("active");
light2.classList.add("active");
light3.classList.add("active");

setTimeout(() => {
    lighthouse.style.transition = "none";
    for (let i = 0; i < wave.length; i++) {
        let w = wave[i].getElementsByClassName("img-w")[0];
        w.style.transition = "none";
    }
    rope1wrapper.style.transition = 'none';
    rope2wrapper.style.transition = 'none';
    rope3wrapper.style.transition = 'none';
    light1.style.transition = "none";
    light2.style.transition = "none";
    light3.style.transition = "none";
}, 10500);


var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);