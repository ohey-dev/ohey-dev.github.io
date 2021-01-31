(function($) {
    // Add active class to nav items when on that page
    $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
})