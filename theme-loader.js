let themes = [
    {
        name: "Light",
        href: "themes/light_theme.css"
    },
    {
        name: "Dark",
        href: "themes/dark_theme.css"
    },
]

let currentTheme = undefined;
let themeSheet = document.getElementById("theme-sheet");
let themeButton = document.getElementById("theme-button");

function setTheme(themeId) {
    let theme = themes[themeId]

    currentTheme = themeId
    themeButton.innerText = theme.name
    themeSheet.href = theme.href
}

function incrementTheme(amount = 1) {
    setTheme((currentTheme + 1) % themes.length)
}

// Button
themeButton.onclick = function() {
    incrementTheme()
}

// Default theme
setTheme(1)