let navbarDiv = document.getElementById("nav-holder")

const placeholderNav = `<nav></nav>`;

navbarDiv.innerHTML = placeholderNav;

fetch('/templates/navbar.html')
.then(response => response.text())
.then(html => {
    navbarDiv.innerHTML = html;
})
.catch(error => console.error('Error:', error));