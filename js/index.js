window.onscroll = function() {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width > 768) {
        var currentScrollPos = window.pageYOffset;
        if (currentScrollPos < 300) {
            document.getElementById("navBarBackground").style.display = "none";
        } else {
            document.getElementById("navBarBackground").style.display = "initial";
        }
    }
}

function openNavBarOverlay() {
    document.getElementById("navBarOverlay").style.height = "100%";
}

function closeNavBarOverlay() {
    document.getElementById("navBarOverlay").style.height = "0%";
}