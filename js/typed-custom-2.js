jQuery(document).ready(function() {
        $(function () {
    $(".typed").typed({
        stringsElement: $('.typed-strings'),
        typeSpeed: 200,
        backDelay: 500,
		cursorChar: '_',
        loop: true,
        contentType: 'html',
        loopCount: false,
        callback: function () { null; },
        resetCallback: function () { newTyped(); }
    });
});
});