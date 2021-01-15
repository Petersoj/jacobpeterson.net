function setCookie(cookieName, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var cookieValue = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = cookieName + "=" + cookieValue;
}

function getCookie(cookieName) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == cookieName) {
            return unescape(y);
        }
    }
}

var canvasDiv = document.getElementById('particle');
var options = {
    particleColor: '#ff0004',
    interactive: true,
    speed: 'medium',
    density: 'medium'
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);



$(window).on("load", function(){
    if (getCookie("animation") == null) {
        $("#particle").animate({ opacity: 1 }, 3000);
        $("#hi").delay(3000).animate({ opacity: 1 }, 700).delay(1000).animate({ opacity: 0 }, 700);
        $("#name").delay(5000).animate({ opacity: 1 }, 700);
        $("#talk").delay(7200).animate({ opacity: 1 }, 700);
        $("a").delay(9000).animate({ opacity: 1 }, 700);
        
        setCookie("animation", "done", 1);
    } else {
        $('#particle').delay(500).animate({ opacity: 1 }, 1000);
        $('#name').delay(500).animate({ opacity: 1 }, 1000);
        $('#talk').delay(500).animate({ opacity: 1 }, 1000);
        $('a').delay(500).animate({ opacity: 1 }, 1000);
    }
});