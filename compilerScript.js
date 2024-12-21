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