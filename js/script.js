$(window).on("load", function(){
    $(".loader .inner").fadeOut(600, function(){
        $(".loader").fadeOut(800);
    });

    $(".items").isotope({
        filter:'*',
        animationOptions:{
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });
    
})


$(document).ready(function(){
    $('#slides').superslides({
        animation: 'fade',
        play: 4000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Software Engineer.", "Web Designer.", "Tech Enthusiast."],
        typeSpeed: 80,
        loop: true,
        startDelay: 1000,
        showCursor: false
    })

    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
    const marqueeContent = document.querySelector("ul.marquee-content");

    root.style.setProperty("--marquee-elements", marqueeContent.children.length);

    for(let i=0; i<marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }

    $("[data-fancybox]").fancybox();




    $("#filters a").click(function(){
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");
        
        $(".items").isotope({
            filter:selector,
            animationOptions:{
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });

    $("#navigation li a").click(function(e) {
		e.preventDefault();

		var targetElement = $(this).attr("href");
		var targetPosition = $(targetElement).offset().top;
		$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	});

    const nav = $('#navigation');
    const navTop = nav.offset().top;

    $(window).on("scroll", stickynav);

    function stickynav(){

        var body = $("body");
        if ($(window).scrollTop() >= navTop){
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");

        }else{
            body.removeClass("fixedNav");
            body.css("padding-top", 0);
        }
    }


    

});