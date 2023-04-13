platformLinkDisplay = document.getElementById("platformLinkDisplay");

function show_platform(platform) {
    switch (platform) {
        case "themesjs":
            platformLinkDisplay.innerText = "https://use.themesjs.de/releases/latest/themesjs.min.js";
            break;
        case "download":
            window.open("https://use.themesjs.de/releases/latest/themesjs.min.js", "_blank");
            break;
        case "jsdelivr":
            platformLinkDisplay.innerText = "https://cdn.jsdelivr.net/gh/themes-js/themes.js/themes.min.js";
            break;
    }
}

function copyPlatformLink() {
    navigator.clipboard.writeText(document.getElementById('platformLinkDisplay').innerText);
    document.querySelectorAll(".platformLink>*").forEach((element) => {
        element.style.backgroundColor = "#888";
        window.setTimeout(() => element.style.backgroundColor = "var(--slide_platforms_bg-color)", 250);
    });
}

window.setTimeout(() => document.getElementById("platformLink").style.width = document.getElementById("platformContainer").offsetWidth + "px", 1000);