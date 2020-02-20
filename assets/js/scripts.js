// Collapse menu icon on link touch
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
}); 

// Get current year
$("#date").text( (new Date).getFullYear() );
