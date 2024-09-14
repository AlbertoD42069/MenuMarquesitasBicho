function verMenu(){
    var container =  document.getElementsByClassName("sugerencias")[0];

    if (container.style.visibility == "hidden") {
        container.style.visibility = "visible";
        container.style.display = "unset"
    } else {
        container.style.visibility = "hidden";
        container.style.display = "none"

    }
}