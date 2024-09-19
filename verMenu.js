/* funcion para hacer scroll interno dentro de una view */
function scrollToElement(event) {
    const scrollTarget = event.target.getAttribute('data-scroll');
    const scrollElement = document.querySelector(`[id-div="${scrollTarget}"]`);
  
    scrollElement.scrollIntoView({
      behavior: 'smooth'
    });
  }