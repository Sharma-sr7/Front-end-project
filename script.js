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
function alertfun(){
    alert("Now you can't access this one")
}

const notAccess = document.querySelector(" .sub-menu1 .sub-menu-list1 a ").href = 'inqu.html';
const notAccess1 = document.querySelector(".foot .iq p a").href = 'inqu.html';
const notAccess2 = document.querySelectorAll(".mob-nav ul li a:not(.active)")
notAccess2.forEach((element)=>{
    element.addEventListener("click", function(){
        element.removeAttribute("href")
        alertfun()
    })
})

const notAccess3 = document.querySelectorAll('.sec3 .css-con a');
notAccess3.forEach((ele)=>{
    ele.addEventListener('click', function(){
        ele.removeAttribute('href')
        alertfun()
    })
})
const notAccess4 = document.querySelectorAll('.sec4 .js-con a');
notAccess4.forEach((ele)=>{
    ele.addEventListener('click', function(){
        ele.removeAttribute('href')
        alertfun()
    })
})
const notAccess5 = document.querySelectorAll('.sec5 .python-con a');
notAccess5.forEach((ele)=>{
    ele.addEventListener('click', function(){
        ele.removeAttribute('href')
        alertfun()
    })
})