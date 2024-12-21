const menubtn = document.querySelector(".menu");
const sidebar = document.querySelector(".menu-list");
menubtn.addEventListener("click", function () {
    sidebar.classList.add("active");
    menubtn.style.visibility = " hidden ";
});
const closebtn = document.querySelector(" .menu-list p");
closebtn.addEventListener("click", function () {
    sidebar.classList.remove("active");
    menubtn.style.visibility = "visible";
});

const mobicon = document.getElementById("mob-nav-icon");
const mobsidebar = document.querySelector(".htmlpage .topics");
const mobmenuicon = document.querySelector("#mob-nav-icon i");
mobicon.addEventListener("click", function () {
    mobsidebar.classList.toggle("active");
    mobmenuicon.classList.toggle("fa-bars");
    mobmenuicon.classList.toggle("fa-xmark")
});
const submenu = document.querySelector(" .sub-menu");
const list = document.querySelector(".sub-menu-list");
const menuicon = document.querySelector(".sub-menu .sub-menu-icon");
submenu.addEventListener("click", function () {
    list.classList.toggle("active");
    menuicon.classList.toggle("rotate");

});
const submenu1 = document.querySelector(" .sub-menu1");
const list1 = document.querySelector(".sub-menu-list1");
const menuicon1 = document.querySelector(".sub-menu1 .sub-menu-icon1")
submenu1.addEventListener("click", function () {
    list1.classList.toggle("active");
    menuicon1.classList.toggle("rotate");
});
const submenu2 = document.querySelector(" .sub-menu2");
const list2 = document.querySelector(".sub-menu-list2");
const menuicon2 = document.querySelector(".sub-menu2 .sub-menu-icon2")
submenu2.addEventListener("click", function () {
    list2.classList.toggle("active");
    menuicon2.classList.toggle("rotate");
});


// const dark = document.querySelector("header")
// const maindark = document.querySelector("main")
// const exampledark = document.querySelectorAll(".example")
// const codedark = document.querySelectorAll(".tcon")
// const btndark = document.querySelector(".but .prebtn")
// const nexbtn = document.querySelector(".but .nexbtn")
// const sidedark = document.querySelector(".topics")
// const sidelink = document.querySelectorAll(".topics a:not(.active)")
// const activedark = document.querySelector(".topics a.active")
// const changetheme = document.getElementById("dark")
// changetheme.addEventListener("click", function () {
//     dark.classList.toggle("dark-theme")
//     maindark.classList.toggle("dark-theme")
//     exampledark.forEach((element) => {
//         element.classList.toggle("dark=theme")
//     })
//     codedark.forEach((element) => {
//         element.classList.toggle("dark-code")
//     })
// })
// exampledark.forEach((element) => {
//     element.style.backgroundColor = "grey"
//     element.style.color = "black"

// })
// changetheme.addEventListener("click", function () {
//     dark.style.backgroundColor = "black"
//     dark.style.color = "white"
//     maindark.style.backgroundColor = "black"
//     maindark.style.color = "white"
//
    // codedark.forEach((element) => {
    //     element.style.color = "yellow"
    // })
//     btndark.style.border = "3px solid white"
//     btndark.style.backgroundColor = "black"
//     btndark.style.color = "white"
//     nexbtn.style.border = "3px solid white"
//     nexbtn.style.backgroundColor = "black"
//     nexbtn.style.color = "white"
//     sidedark.style.backgroundColor = "black"
//     sidelink.forEach((element) => {
//         element.style.color = "white"
//     })
//     sidelink.forEach((element) => {
//         element.addEventListener("mouseover", function () {
//             element.style.color = "black"
//         })
//     })
//     sidelink.forEach((element) => {
//         element.addEventListener("mouseout", function () {
//             element.style.color = "white"
//         })
//     })
//     activedark.style.backgroundColor = "white"
//     activedark.style.color = "black"
// })
