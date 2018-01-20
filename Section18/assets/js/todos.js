// check off specific todos by clicking
$("ul").on("click", "li", function () {
    // make the <li>s grey and line-through with toggle
    $(this).toggleClass("completed");

});

// click on x to delete todo
/* we use ul in the first selection and add span as a parameter inside callback function
the reason to do that, when the page loads there might be spans or not. 
it's kind of future listening of spans under <ul> */
$("ul").on("click", "span", function (event) {
    // stop the event bubbling to go until the root html element
    $(this).parent().fadeOut(1000, function () {
        // remove the parent
        $(this).remove();
    })
    event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        // grabbing the new todo from the input
        var todoText = $(this).val();
        $(this).val("");
        // create a new li and add to url
        $("ul").append("<li><span>X</span> " + todoText + "</li>")
    }

});