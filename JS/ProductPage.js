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