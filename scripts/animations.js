// Topbar animation
const navHolder = document.getElementById('nav-holder');

let isShifted = false

// Banner grow
const banner = document.getElementById('banner-img');

window.addEventListener('scroll', function() {
    
    // Banner update
    banner.style.width = 100 + (0.2 * window.scrollY) + "%";

    // Nav update
    let rect = navHolder.getBoundingClientRect();
    
    if (rect.top <= 0 && !isShifted) {

    } else if (rect.top > 0 && isShifted) {

    }
});