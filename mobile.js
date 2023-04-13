var smaller750 = false;
var smaller600 = false;
var smaller450 = false;

function checkMobileChanges() {
    if (window.matchMedia("(max-width: 750px)").matches) {
        if (!smaller750) {
            document.getElementById("mobilechange-slide-docs").innerHTML = "<br>";
            document.getElementById("catchphrase").style.display = "none";
            document.getElementById("slide-title").classList = "slide-half slide1 centerContent";
        }
        smaller750 = true;
    } else {
        if (smaller750) {
            document.getElementById("mobilechange-slide-docs").innerHTML = "";
            document.getElementById("catchphrase").style.display = "block";
            document.getElementById("slide-title").classList = "slide-full slide1 centerContent";
        }
        smaller750 = false;
    };

    if (window.matchMedia("(max-width: 600px)").matches) {
        if (!smaller600) {
            document.getElementById("slide-howto-code").style.fontSize = "2.5vw";
        }
        smaller600 = true;
    } else {
        if (smaller600) {
            document.getElementById("slide-howto-code").style.fontSize = "";
        }
        smaller600 = false;
    }

    if (window.matchMedia("(max-width: 450px)").matches) {
        if (!smaller450) {
            document.getElementById("slide-platforms").style.display = "none";
            document.getElementById("slide-howto").style.display = "none";
            document.getElementById("arrows").style.display = "none";
            document.getElementById("slide-docs").classList = "slide-half slide4";
        }
        smaller450 = true;
    } else {
        if (smaller450) {
            document.getElementById("slide-platforms").style.display = "block";
            document.getElementById("slide-howto").style.display = "block";
            document.getElementById("arrows").style.display = "block";
            document.getElementById("slide-docs").classList = "slide-third slide4";
        }
        smaller450 = false;
    }
}

window.addEventListener('resize', checkMobileChanges);
checkMobileChanges();