// JavaScript Document

$input = $("#input_name");
$output = $(".people");
$submit = $("#btn_submit");

var people;


$input.keyup(function(){
    $output.html($input.val());
});

function readJSON(){
    $.getJSON('data/people.json', function(data) {
        people = data;
       console.log(JSON.stringify(people));
    });
}

readJSON();
