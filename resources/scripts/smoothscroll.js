
function scrollToSection(event, id) {

    event.preventDefault(); // Prevents the default instant-teleport-scroll to the desired location

    if (!id) { window.scrollTo({top: 0, behavior: 'smooth'}); return; } // Scroll to top

    const element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}