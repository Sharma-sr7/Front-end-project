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
const submenu2 = document.querySelector(" .sub-menu2");
const list2 = document.querySelector(".sub-menu-list2");
const menuicon2 = document.querySelector(".sub-menu2 .sub-menu-icon2")
submenu2.addEventListener("click", function(){
    list2.classList.toggle("active");
    menuicon2.classList.toggle("rotate");
});



// compiler 
const htmlCode = document.getElementById("html-code");
const cssCode = document.getElementById("css-code");
const jsCode = document.getElementById("js-code");
const combtn = document.getElementById("com-btn");
const outputDiv = document.getElementById("com-code");
combtn.addEventListener('click', function(){
    const htmlcodes = htmlCode.value;
    const csscodes = cssCode.value;
    const jscodes = jsCode.value;
    const output = `
    <html>
    <head>
    <style>
    ${csscodes}
    </style>
    </head>
    <body>
    ${htmlcodes}
    <script>
    ${jscodes}
    </script>
    </body>
    </html>
    `;
    outputDiv.innerHTML = output;
});