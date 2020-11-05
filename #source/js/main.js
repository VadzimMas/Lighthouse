
// @prepros -prepend lazysizes.min.js
// @prepros-prepend jquery-3.5.1.min.js
// @prepros-prepend parallax.js
// @prepros -append jquery.parallax.js



// @prepros -prepend slick.js
// @prepros -prepend slick-settings.js


// let container = document.getElementsByClassName("container")[0];
// container.classList.add("active");
// console.log(container);






2
3
$(document).ready(function () {
    $(".wrapper").addClass("active");
    $(".parralax__liighthouse .img").addClass("active");
    $(".wave .img").addClass("active");
    $(".rope").addClass("active");
    $(".light-1").addClass("active");
    $(".light-2").addClass("active");
    $(".light-3").addClass("active");


    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
});

