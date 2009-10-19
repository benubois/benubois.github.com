$(document).ready(function() {
    // Wrap Liquid Tags
    $('.liquid-tag').prepend("{{").append("}}");
    
    $('#liquid-ie').append('$(\'.liquid-tag\').prepend("{{").append("}}");');
});
