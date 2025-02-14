let themes = [
    {
        name: "Light",
        href: "/themes/light_theme.css"
    },
    {
        name: "Dark",
        href: "/themes/dark_theme.css"
    },
]

let currentTheme = undefined;
let themeSheet = document.getElementById("theme-sheet");
let themeButton = document.getElementById("theme-button");

let savedTheme = localStorage.getItem("theme")

function setTheme(themeId) {
    let theme = themes[themeId]

    currentTheme = themeId
    themeButton.innerText = theme.name
    themeSheet.href = theme.href

    localStorage.setItem("theme", themeId)
}

function incrementTheme(amount = 1) {
    setTheme((currentTheme + amount) % themes.length)
}

// Button
themeButton.onclick = function() {
    incrementTheme()
}

// Default theme if not saved
if (savedTheme) {
    setTheme(parseInt(savedTheme))
} else {
    setTheme(1)
}