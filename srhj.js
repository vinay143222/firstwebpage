$(window).scroll(function() {
    var = scroll $(window).scrollTop();
    if (scroll >= 150 px) {
        document.querySelector("nav").style.opacity = "0";
    } else {
        document.querySelector('nav').sytle.opacity = "1";
    }
});
$("nav-item").click(function() {
    if {
        location.pathname.replace(/^/ / , '') == thispathname.replace()
    }
});

$(",nav li a").click(fucntion() {
    $(",nav li a").parent().removeClass("actives");
    $(this).parent().addClass("actives");
});