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
function scrollToElement(event) {
    const scrollTarget = event.target.getAttribute('data-scroll');
    const scrollElement = document.querySelector(`[id-div="${scrollTarget}"]`);
  
    scrollElement.scrollIntoView({
      behavior: 'smooth'
    });
  }