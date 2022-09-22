// $(document).on('mouseenter', '.item', function(){
//     $("p").slideDown("fast")
// })
// $(document).on('mouseleave', '.item', function(){
//     $("p").slideUp("slow")
// })
import Service from '../JS/service.js';

if (JSON.parse(window.localStorage.getItem('data')) != undefined 
||  JSON.parse(window.localStorage.getItem('data')).length > 0) {
    var obj = new Service();
    obj.UpdateData();
}

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

//

// getdetails = () => {
//     var id = this.Attr('id')
//     var data = Details(id);
// }

$(document).on('click','.card', function(){
    var obj = new Service();
    var data = obj.Details(this.id)
    window.localStorage.setItem('data', JSON.stringify(data));
    location.href='detail.html'
})