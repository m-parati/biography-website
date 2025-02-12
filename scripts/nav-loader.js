let navbarDiv = document.getElementById("nav-holder")
let footerDiv = document.getElementById("footer-holder")

const placeholderNav = `<nav></nav>`;
const placeholderFooter = `<footer></footer>`;

navbarDiv.innerHTML = placeholderNav;
footerDiv.innerHTML = placeholderFooter;

// Cache navbar and footer
const cacheKeyNav = 'navbarCache';
const cacheKeyFooter = 'footerCache';

const cachedNav = localStorage.getItem(cacheKeyNav);
const cachedFooter = localStorage.getItem(cacheKeyFooter);

// Use cache navs but reload them in the background
if (cachedNav) {
    navbarDiv.innerHTML = cachedNav;
}

if (cachedFooter) {
    footerDiv.innerHTML = cachedFooter;
}

// Fetch the navbar and footer and cache them
fetch('/templates/navbar.html')
.then(response => response.text())
.then(html => {
    navbarDiv.innerHTML = html;
    localStorage.setItem(cacheKeyNav, html);
})
.catch(error => console.error('Error:', error));


fetch('/templates/footer.html')
.then(response => response.text())
.then(html => {
    footerDiv.innerHTML = html;
    localStorage.setItem(cacheKeyFooter, html);
})
.catch(error => console.error('Error:', error));