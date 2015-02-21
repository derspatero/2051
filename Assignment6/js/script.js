/**
 * Created by elambke on 15-02-19.
 */
var defaulthash;

if(window.location.hash){
    $('#myTab').find('a[href="'+window.location.hash+'"]').tab('show');
}
else {
    defaulthash = $('.active').find('a').attr('href');
}

$('a').click(function(){
    window.location.hash = $(this).attr('href');
});

$(window).on('hashchange', function(){
    if(window.location.hash) {
        $('#myTab').find('a[href="' + window.location.hash + '"]').tab('show');
    }
    else {
        $('#myTab').find('a[href="' + defaulthash + '"]').tab('show');
    }
});