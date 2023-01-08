var cursor = document.querySelector('.cursor');
var cursorTwo = document.querySelector('.cursor-two');

document.addEventListener("mousemove", function(e){
    cursor.style.cssText = cursorTwo.style.cssText = "left:" + e.clientX
     + "px; top:" + e.clientY + "px;";
});   