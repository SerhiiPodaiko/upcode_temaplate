$( document ).ready(function() {
    $(".menu-link-inner-two").hide();
    $(".menu-link-inner").hide();

   $(".products").mouseenter(function () {
       $(".menu-link-inner").fadeToggle(500)
   });
   $(".products").mouseleave(function () {
       $(".menu-link-inner").fadeToggle(500);
   });

   $(".men").mouseenter(function () {
       $(".menu-link-inner-two").show(100);
   });
    $(".men").mouseleave(function () {
        $(".menu-link-inner-two").hide(100);
    });

//    progress-bar
    $(window).scroll(function () {
        let ratio = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
        $("#progress-bar").width(ratio + '%');
    });

    //back-to-top
    let btnTop = $(".back-to-top")
    $(window).on("scroll", function () {
        if($(window).scrollTop() >= 300){
            btnTop.fadeIn();
        }else {
            btnTop.fadeOut();
        }
    });

    btnTop.on("click", function () {
       $("html,body").animate({scrollTop:0},900)
    });


    function animateAbout (){
        let delay = 500;
        $(".progress-bar").each(function(i){
            $(this).delay( delay*i ).animate( { width: $(this).attr('aria-valuenow') + '%' }, delay );

            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: delay,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now)+'%');
                }
            });
        });
    }

    animateAbout();

    $(".burger_menu").on('click', function () {
       $(".menu").slideToggle(300);
    });

//    Якоря-силки
    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

});




