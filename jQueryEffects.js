// fadeOut() div when button is clicked
// $("button").on("click", function () {
//     $("div").fadeOut(1000, function () {
//         $(this).remove();
//     });
// });

// fadeIn() div when button is clicked //display: none
// $("button").on("click", function () {
//     $("div").fadeIn(1000);
// });

// fadeToggle()
// $("button").on("click", function () {
//     $("div").fadeToggle(500);
// })

// slideDown() //display: none
// $("button").on("click", function () {
//     $("div").slideDown(500);
// })

// slideUp()
// $("button").on("click", function () {
//     $("div").slideUp(500);
// })

// slideToggle()
$("button").on("click", function () {
    $("div").slideToggle(1000, function () {
        // $(this).remove();
    })
})