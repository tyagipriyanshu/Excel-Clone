// ===========Document Object Model (DOM)============
// -> is a programming interface (API) for web documents.
// -> When a web page is loaded, the browser creates a DOM of the page. 
// -> represents the page so that programs can change the document structure, style, and content. 
// -> represents the HTML elements as nodes and objects. 
// -> so that programming languages can interact with the HTML page.
// -> With the HTML DOM, JavaScript can access and change all the elements of an HTML document.
// DOM -> represents HTML document as a tree structure

// ----------------------------------------------------
// get page element
// let input = document.querySelector(".input");
// let button = document.querySelector(".add");
let ul = document.querySelector("ul");

// button.addEventListener("click", function () {
//     let ans = input.value;
//     // alert(ans);
//     let li = document.createElement("li");
//     li.innerText = ans;
//     li.setAttribute("class", "task");
//     ul.appendChild(li);
//     input.value = "";
// });

for (let i = 0; i < 26; i++) {
    // let li = document.createElement("li");
    // li.innerText = String.fromCharCode(65 + i);
    // li.setAttribute("class", "task");
    // ul.appendChild(li);
    let str = "<li class='task'> " + String.fromCharCode(65 + i) + "</li>";
    ul.innerHTML = str;

}
