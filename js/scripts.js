// Initially, there's nothing here.
// You can add JavaScript to make your website more interactive.
// script.js
$(document).ready(function(){
    $("#navbar").load("navbar.html");
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.createElement('link');
    link.rel = 'icon';
    
    // Use the appropriate file type (e.g. 'image/gif' for animated GIF, 'image/png' for PNG)
    link.type = 'image/gif';
    link.href = 'images/icons8-3d.gif';
    
    document.getElementsByTagName('head')[0].appendChild(link);
});
