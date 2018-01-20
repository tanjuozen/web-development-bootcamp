// fadeOut()
// fadeIn()
// fadeToggle()
// slideDown()
// slideUp()
$("button").on("click", function () {
    $("div").slideToggle(1000, function () {
        // this code will run only the fadeOut() is finished
        //$(this).remove();
    });
    /* the code written directly after fadeOut() - not as a callback function - 
    is not guaranteed to be run after fadeOut(), it may not even wait for fadeOut() to finish */
});



