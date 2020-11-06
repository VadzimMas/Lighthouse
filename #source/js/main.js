
// @prepros -prepend lazysizes.min.js
// @prepros-prepend jquery-3.5.1.min.js
// @prepros-prepend parallax.js
// @prepros -append jquery.parallax.js



// @prepros -prepend slick.js
// @prepros -prepend slick-settings.js


// let container = document.getElementsByClassName("container")[0];
// container.classList.add("active");
// console.log(container);



$(document).ready(function () {
    $(".wrapper").addClass("active");
    $(".parralax__liighthouse .img-l").addClass("active");
    $(".wave .img").addClass("active");
    $(".rope").addClass("active");
    $(".light-1").addClass("active");
    $(".light-2").addClass("active");
    $(".light-3").addClass("active");

    setTimeout(() => {
        let lighthouse = document.getElementsByClassName("parralax__liighthouse")[0].getElementsByClassName("img-l")[0];
        let wave = document.getElementsByClassName("wave");
        let rope = document.getElementsByClassName("rope");
        let light1 = document.getElementsByClassName("light-1")[0];
        let light2 = document.getElementsByClassName("light-2")[0];
        let light3 = document.getElementsByClassName("light-3")[0];


        lighthouse.style.transition = "none";
        for (let i = 0; i < wave.length; i++) {
            let w = wave[i].getElementsByClassName("img-w")[0];
            w.style.transition = "none";
        }
        for (let i = 0; i < rope.length; i++) {
            rope[i].style.transition = "none";
        }
        light1.style.transition = "none";
        light2.style.transition = "none";
        light3.style.transition = "none";
    }, 4500);


    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
});

