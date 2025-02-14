const banner = document.getElementById('banner-img');

window.addEventListener('scroll', function() {    
    banner.style.width = 100 + (0.2 * window.scrollY) + "%";
});