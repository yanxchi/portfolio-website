function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open"); /* Adds "open" to the class name so that the style changes. */
    icon.classList.toggle("open");
}