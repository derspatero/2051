// JavaScript Document

var $input_body_colour = $('#input_body_colour');
var $input_content_colour = $('#input_content_colour');
var $input_text_colour = $('#input_text_colour');
var $btnSave = $('#btn_save');
var $btnRemoveData = $('#btn_remove_data');

var $bodycolorOut = $('#body_color_data');
var $contentcolorOut = $('#content_color_data');
var $textcolorOut = $('#text_color_data');


init();

$btnSave.click(function(){

    localStorage.setItem('bodycolor', $input_body_colour.val());
    localStorage.setItem('contentcolor', $input_content_colour.val());
    localStorage.setItem('textcolor', $input_text_colour.val());

    init();

})


$btnRemoveData.click(function(){
    localStorage.clear();
    init();
})

function init(){

    var bodycolor = localStorage.getItem('bodycolor');
    var contentcolor = localStorage.getItem('contentcolor');
    var textcolor = localStorage.getItem('textcolor');

    if(bodycolor){
        $bodycolorOut.html(bodycolor);
        $("body").css("background-color",bodycolor);
    }else {
        $bodycolorOut.html('No Data Set');
    }

    if(contentcolor){
        $contentcolorOut.html(contentcolor);
        $(".wrapper").css("background-color",contentcolor);
    }else {
        $contentcolorOut.html('No Data Set');
    }

    if(textcolor){
        $textcolorOut.html(textcolor);
        $(".box_main").css("color",textcolor);
    }else {
        $textcolorOut.html('No Data Set');
    }
}


