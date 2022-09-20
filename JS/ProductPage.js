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

var Details = [
    {
        name: 'UTS Business School',
        architect: 'Frank Gehry',
        location: 'Ultimo, Sydney',
        address: '14-28 Ultimo Rd'
    },
    {
        name: 'Binoculars',
        architect: 'Frank Gehry',
        location: 'Los Angeles, California',
        address: '340 Main Street'
    },
    {
        name: 'Fondation',
        architect: 'Frank Gehry',
        location: 'France, Paris',
        address: '8 Avenue du Mahatma-Gandhi'
    },
    {
        name: 'Lou Ruvo Center',
        architect: 'Frank Gehry',
        location: 'Las Vegas, Nevada',
        address: '888 West Bonneville Avenue'
    },
    {
        name: 'Walt Disney Concert Hall',
        architect: 'Frank Gehry',
        location: 'Los Angeles, California',
        address: '111 S Grand Ave, Los Angeles, CA 90012'
    },
    {
        name: 'Twisted Luma Arles Tower',
        architect: 'Frank Gehry',
        location: 'France, Arles',
        address:'33 avenue Victor Hugo'
    }
]

Details = ($id) => {
    return test[$id];
}