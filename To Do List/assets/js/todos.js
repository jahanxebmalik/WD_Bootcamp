// Select li and change color to gray with line-through
$("ul").on("click", "li", (function () {
    $(this).toggleClass("completed");
}))

// OR
// console.log($(this).css("color"));
// if li is gray
// if ($(this).css("color") === "rgb(128, 128, 128)") {
//     // turn it black
//     $(this).css({
//         color: "black",
//         textDecoration: "none"
//     });
//     //else
// } else {
//     // turn it gray
//     $(this).css({
//         color: "gray",
//         textDecoration: "line-through"
//     });
// }

//Click on X to delete todos
// $("span").click(function (event) {
$("ul").on("click", "span", (function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
}))

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        // grabbing new todo text from input
        var todoText = $(this).val();
        // to clear todo from input field
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
    }
})

$("#toggleForm").click(function () {
    $("input[type='text']").fadeToggle();
});