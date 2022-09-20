// $(document).on('mouseenter', '.item', function(){
//     $("p").slideDown("fast")
// })
// $(document).on('mouseleave', '.item', function(){
//     $("p").slideUp("slow")
// })


$(document).ready(function(){
    $(".switch").click(function(){
        $("body").toggleClass("dark-mode");
    if($("body").hasClass("dark-mode")){
        $(".switch").attr("name", "sunny-outline");
    }else{
        $(".switch").attr("name", "moon-outline"); 
    }
  });
});


$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 60)
});
