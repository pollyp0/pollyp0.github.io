let blueBlock = document.getElementById("blueBlock");
let preview = document.getElementById("photo")


setInterval(() => {
    blueBlock.style.width = preview.clientWidth + "px";
    blueBlock.style.height = preview.clientHeight + "px";
}, 500)