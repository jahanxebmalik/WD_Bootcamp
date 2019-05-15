window.setTimeout(function () {

    var todos = [];

    // Ask user about their input
    var input = prompt("What do you want to do?");

    // To ask again and again until user quits
    while (input !== "quit") {
        // handle input
        if (input === "list") {
            console.log("**********");
            todos.forEach(function (todo, i) {
                console.log(i + ": " + todo);
            });
            console.log("**********");
        } else if (input === "new") {
            var newTodo = prompt("Add new todo");
            // Add to Todo Array
            todos.push(newTodo);
            console.log("Added new todo");
        } else if (input === "remove") {
            // Ask about index
            var index = prompt("Which item do you wish to remove?");
            // Remove item from the list
            todos.splice(index, 1);
            console.log("Deleted Todo");
        }
        input = prompt("What do you want to do?");
    }
    console.log("OK! YOU QUIT THE APP");

}, 500);