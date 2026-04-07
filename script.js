var num = 0; // global variable

function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}

function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    var styleSheet = document.getElementById("mainStyleSheet")

    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var currStyle = styleSheet.getAttribute("href");
   
    // 1 (c) Determine new stylesheet file name
    var newStyle = (currStyle === "style1.css") ? "style2.css" : "style1.css";

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    styleSheet.setAttribute("href", newStyle);

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("preferredStyle", newStyle);
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    var savedStyle = localStorage.getItem("preferredStyle");
    
    // 2 (b) get html style element by ID
    var styleSheet = document.getElementById("mainStyleSheet");
    
    // 2 (c) replace href attribute of html element.
    if (savedStyle) {
        styleSheet.setAttribute("href", savedStyle);
    }
    
}


