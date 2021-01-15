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