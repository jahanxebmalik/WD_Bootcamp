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
        } else if
    }
    console.log("OK! YOU QUIT THE APP");

    // if (input === new) {
    //     var addTodo = prompt("Add new todo");
    //     todos.push(addTodo);
    //     console.log(todos);
}

}, 500);