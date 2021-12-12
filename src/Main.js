import $ from 'jquery';

$(window).on('load', function () {
    $('#background').animate({opacity: 1}, 1500);
    addFadeInAndEaseDelay('#name-container', 1500, 3000);
    addFadeInAndEaseDelay('#link-github', 3500, 3000);
    addFadeInAndEaseDelay('#link-linkedin', 4000, 3000);
});

function addFadeInAndEaseDelay(jquerySelector, delayMillis, fadeInMillis) {
    setTimeout(function () {
        $(jquerySelector).animate({opacity: 1}, fadeInMillis).addClass('ease-animation');
    }, delayMillis);
}

VANTA.TOPOLOGY({
    el: "#background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xfc1212,
    backgroundColor: 0x0
})