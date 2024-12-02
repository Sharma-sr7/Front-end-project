const menubtn = document.querySelector(".menu");
const sidebar = document.querySelector(".menu-list");
menubtn.addEventListener("click", function () {
    sidebar.classList.add("active");
    menubtn.style.visibility = " hidden ";
});
const closebtn = document.querySelector(" .menu-list p");
closebtn.addEventListener("click", function () {
    sidebar.classList.remove("active");
    menubtn.style.visibility = "visible"
});
const submenu = document.querySelector(" .sub-menu");
const list = document.querySelector(".sub-menu-list");
const menuicon = document.querySelector(".sub-menu .sub-menu-icon");
submenu.addEventListener("click", function(){
    list.classList.toggle("active");
    menuicon.classList.toggle("rotate");

});
const submenu1 = document.querySelector(" .sub-menu1");
const list1 = document.querySelector(".sub-menu-list1");
const menuicon1 = document.querySelector(".sub-menu1 .sub-menu-icon1")
submenu1.addEventListener("click", function(){
    list1.classList.toggle("active");
    menuicon1.classList.toggle("rotate");
});
// submenu.forEach((btn) => {
//     btn.addEventListener("click", function (event) {
//         event.preventDefault();
//         const container =document.getElementById(this.dataset.container);
//         if(!container.classList.contains("active")){
//             container.classList.add("active");
//             container.style.height = "auto";
//             const height = container.clientHeight + "px";
//             container.style.height = "0px";
//             setTimeout(function () {

//             },0);
//         }else{

//         }
//     });
// });




function tryIt(){
    var code = document.getElementById('input').value;
    document.getElementById('output').innerHTML = code;
}