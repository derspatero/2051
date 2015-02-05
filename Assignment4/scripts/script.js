// JavaScript Document

$input = $("#input_name");
$output = $(".people");
$submit = $("#btn_submit");

var people;

//initialization

readJSON();
$output.html("");

//event handlers

$submit.click(function(e) {
    e.preventDefault();
    $output.html(searchRecord($input.val()));
});

$input.keyup(function(){
    $output.html(searchRecord($input.val()));
});

//functions

function readJSON(){
    $.getJSON('data/people.json', function(data) {
        people = data;
    });
}

function formatData(index) {
    var person = people[index];
    var outputHTML = '<div class="person"><div class="picture"><img src="' + person.picture
        + '" alt="' + person.name + '"></div><div class="info"><ul><li><b>Name:</b>' + person.name
        + '</li><li><b>Company:</b>' + person.company + '</li><li><b>Email:</b> <a href="mailto:'
        + person.email + '">' + person.email + '</a></li></ul><h2>About:</h2><p>' + person.about
        + '</p></div><!-- end info --></div><!-- end person -->';
    return outputHTML;
}

//SearchRecord will look in the entire record (not just the name) for the search string. It is case independent and will accept regex.

function searchRecord(query) {
    var results = "";
    if (query != "" ) {
        for (var i = 0; i < people.length; i++) {
            if (JSON.stringify(people[i]).toLowerCase().search(query.toLowerCase()) != -1) {
                results += formatData(i);
                console.log(people[i].name);
            }
        }
    }
    return results;
}
