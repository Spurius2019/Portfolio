$(document).ready(function (){
var header = document.getElementById('header');
var intro = document.getElementById('intro');
var burger = document.getElementById('burger');
var menu = document.getElementById('menu');
var menu_list = document.getElementById('menu_list');

var c = false;


burger.onclick = function(){
    if(c == false){
    menu.style.display = 'block';
    menu_list.style.left = 65 + '%';
    c = true;
    }
    else{
        menu.style.display = 'none';
        menu_list.style.left = 9999 + 'px';
        c = false;
    }
}
$('#logo').click(function(){
   $([document.documentElement, document.body]).animate({
        scrollTop: $("#intro").offset().top
    }, 200);
});
$('#About_Us_click').click(function(){
   $([document.documentElement, document.body]).animate({
        scrollTop: $("#about_us_block").offset().top
    }, 200);
});
$('#Our_Focus_click').click(function(){
   $([document.documentElement, document.body]).animate({
        scrollTop: $("#our_focus_block").offset().top
    }, 200);
});
$('#Portfolio_click').click(function(){
   $([document.documentElement, document.body]).animate({
        scrollTop: $("#portfolio_block").offset().top
    }, 200);
});
$('#Our_Team_click').click(function(){
   $([document.documentElement, document.body]).animate({
        scrollTop: $("#our_team_block").offset().top
    }, 200);
});
$('#Work_Steps_click').click(function(){
   $([document.documentElement, document.body]).animate({
        scrollTop: $("#statistics_block").offset().top
    }, 200);
});
$('#Contact_click').click(function(){
   $([document.documentElement, document.body]).animate({
        scrollTop: $("#get_in_touch_block").offset().top
    }, 200);
});
});