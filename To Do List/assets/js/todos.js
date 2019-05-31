// check off specific todos by clicking
$("li").click(function () {
    $(this).toggleClass("completed");
});

//Click on X to delete todos
$("span").click(function (event) {
    //this will remove span, parent() will remove complete li
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
})