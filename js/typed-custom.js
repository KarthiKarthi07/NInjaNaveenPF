jQuery(document).ready(function() {
        $(function () {
    $(".typed").typed({
        stringsElement: $('.typed-strings'),
        typeSpeed: 100,
        backDelay: 500,
        loop: true,
        contentType: 'html',
        loopCount: false,
        callback: function () { null; },
        resetCallback: function () { newTyped(); }
    });
});
});