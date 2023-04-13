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

function setPlatformlinkWidth() { document.getElementById("platformLink").style.width = document.getElementById("platformContainer").offsetWidth + "px" };
window.addEventListener("load", setPlatformlinkWidth);
window.addEventListener("resize", setPlatformlinkWidth);

// Catchphrases
const catchphrases = [
    'The <span class="background-accent">only library</span> you will ever need to theme your Websites and Apps.',
    '<span class="background-accent">Theme management</span> made easy!',
    'The <span class="background-accent">best</span> way to theme your Website.',
    'The <span class="background-accent">best</span> way to theme your App.'
];
var currentCatchphrase = 0;
const catchphrase = document.getElementById("catchphrase");

window.setInterval(() => {
    // Get a random catchphrase that is not the current one
    while (true) {
        var randomCatchphrase = Math.floor(Math.random() * catchphrases.length);
        if (randomCatchphrase != currentCatchphrase) break;
    }
    currentCatchphrase = randomCatchphrase;
    // Fade out the current catchphrase
    catchphrase.style.opacity = 0;
    window.setTimeout(() => {
        // Change the text
        catchphrase.innerHTML = catchphrases[currentCatchphrase];
        // Fade in the new catchphrase
        catchphrase.style.opacity = 1;
    }, 1000);

}, 15000);

function setCatchphraseHeight() {
    catchphrase.innerHTML = catchphrases.reduce((a, b) => a.length > b.length ? a : b);
    catchphrase.style.height = catchphrase.offsetHeight + "px";
    catchphrase.innerHTML = catchphrases[currentCatchphrase];
}
window.setTimeout(setCatchphraseHeight, 10);

// Arrow down
const arrow_down = document.getElementById("arrow-down")

function scrollEvent() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        arrow_down.style.cursor = "initial";
        arrow_down.style.opacity = "0";
    } else {
        arrow_down.style.cursor = "pointer";
        arrow_down.style.opacity = "1";
    }
}
window.addEventListener("scroll", scrollEvent);
scrollEvent();
arrow_down.addEventListener("click", () => {
    arrow_down.scrollIntoView({ behavior: "smooth" });
});

// Arrow to bottom or top
document.getElementById("arrow_bottom").addEventListener("click", () => {
    document.getElementById("slide-docs").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("arrow_top").addEventListener("click", () => {
    document.getElementById("slide-title").scrollIntoView({ behavior: "smooth" });
});