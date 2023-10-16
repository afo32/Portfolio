// $(document).ready(main);

// var contador = 1;

// function main () {
//     $(".menu-bar").click(function(){
//         if (contador == 1) {
//             $("nav").animate({
//                 left: "0"
//             });
//             contador = 0;
//         } else {
//             contador = 1;
//             $("nav").animate({
//                 left: "-100%"
//                 });
//         }
//     })
// }

const menu = document.querySelector(".menu");
const btn = document.querySelector(".b-header__menubar");

btn.addEventListener("click", () => {
    menu.classList.toggle("active")
})