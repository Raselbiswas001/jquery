$(document).ready( function(){
     // alert
$('.btn').click(function(){
	alert("welcome my website");
});
     // hide
 $('#hide').hover(function(){
    $('h2').hide();
 });
     // show
  $('#show').hover(function(){
    $('h2').show();
 });  
     // toggle
 $('#toggle').hover(function(){
    $('h2').toggle();
 });
     // fadeout
  $('#fadeout').mouseenter(function(){
    $('h2').fadeOut();
 });
     // fadein
  $('#fadein').mouseleave(function(){
    $('h2').fadeIn();
 });
     // text-show
 $('.panel').hover(function(){
    $(".content").slideToggle(2000);
 });

});
