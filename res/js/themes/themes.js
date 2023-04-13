// Config
const config = {
    main_path: 'res/js/themes/',
    standart: "night",
    standart_dark: "dark",
    standart_light: "light",
    themes: [{
            name: 'dark',
            displayName: 'Dunkel',
            text: '#ffffff',
            text2: '#cccccc',
            background: '#282c36',
            background2: '#181c26',
            background3: '#0f111a',
            accent: '#eb660e',
            accent2: '#f2a900',
            icon: '<i class="fas fa-adjust"></i>',
            slide_title_bg: '#000000',
            slide_title: '#ffffff',
            slide_platforms_bg: '#ffe',
            slide_platforms: '#001',
            slide_howto_bg1: '#202',
            slide_howto_bg2: '#002',
            slide_howto: '#eee',
            slide_docs_bg: '#668',
            slide_docs: '#fff'
        },
        {
            name: 'night',
            displayName: 'Nacht',
            text: '#ffffff',
            text2: '#cccccc',
            background: '#0f1017',
            background2: '#020409',
            background3: '#0f111a',
            accent: '#0078d7',
            accent2: '#00bcf2',
            icon: '<i class="fa-solid fa-cloud-moon"></i>',
            slide_title_bg: '#000000',
            slide_title: '#ffffff',
            slide_platforms_bg: '#222222',
            slide_platforms: '#ffffff',
            slide_howto_bg1: '#101',
            slide_howto_bg2: '#010',
            slide_howto: '#fff',
            slide_docs_bg: '#000',
            slide_docs: '#fff'
        }, {
            name: 'light',
            displayName: 'Hell',
            text: '#000000',
            text2: '#222222',
            background: '#ffffff',
            background2: '#f2f2f2',
            background3: '#e6e6e6',
            accent: '#eb660e',
            accent2: '#f2a900',
            icon: '<i class="fa-solid fa-sun"></i>',
            slide_title_bg: '#ffffff',
            slide_title: '#000000',
            slide_platforms_bg: '#000000',
            slide_platforms: '#ffffff',
            slide_howto_bg1: '#fef',
            slide_howto_bg2: '#efe',
            slide_howto: '#001',
            slide_docs_bg: '#000',
            slide_docs: '#fff'
        }
    ]
};

// Functions

function setTheme(set_to_theme) {
    config.themes.forEach((theme) => {
        if (theme.name == set_to_theme) {
            Object.keys(theme).forEach((key) => {
                if (key != 'name' && key != 'displayName' && key != 'icon') {
                    document.documentElement.style.setProperty('--' + key + '-color', theme[key]);
                }
            });
            window.setTimeout(() => {
                document.getElementById("themeswitch").children[0].innerHTML = theme.icon;
            }, 250);
            if (theme.name != "dark") document.querySelectorAll(".platformIcon").forEach((icon) => icon.style.filter = "invert(1) brightness(100)");
            else document.querySelectorAll(".platformIcon").forEach((icon) => icon.style.filter = "brightness(0)");
        }
    });
    let rotation = parseInt((document.getElementById("themeswitch").children[0].style.transform || "rotate(0deg);").replace("rotate(", "").replace("deg);", "").replace("deg)", ""));
    rotation = rotation + 360;
    document.getElementById("themeswitch").children[0].style.transform = "rotate(" + rotation + "deg)";
    localStorage.setItem("theme", set_to_theme);
}

function initTheme() {
    let theme = localStorage.getItem("theme");
    if (theme == null) {
        // Check if system theme is dark
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            theme = config.standart_dark;
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            theme = config.standart_light;
        } else {
            theme = config.standart;
        }
    }
    setTheme(theme);
}
initTheme();

function cycleTheme() {
    let theme = localStorage.getItem("theme");
    if (theme == null) {
        theme = config.standart;
    }
    let index = config.themes.findIndex((obj) => obj.name == theme);
    if (index == config.themes.length - 1) {
        index = 0;
    } else {
        index++;
    }
    setTheme(config.themes[index].name);
}