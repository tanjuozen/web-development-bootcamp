var answer = prompt("What would you like to do?");

var todos = [];

while (answer.indexOf("quit") === -1) {

    if (answer === "new") {
       addToDo();
    } else if (answer === "list") {
        listToDos();
    } else if (answer === "delete") {
       deleteToDo();
    }
    answer = prompt("What would you like to do?");
}

function listToDos() {
    todos.forEach(function(todo, index) {
        console.log("***********");
        console.log(index + ": " + todo);
        console.log("***********");
    });
}

function addToDo() {
    var newTodo = prompt("Enter a new todo");
    todos.push(newTodo);
    console.log(newTodo + " added to the list.");
}

function deleteToDo() {
    var toDelete = Number(prompt("Enter the index of ToDo to delete"));
    todos.splice(toDelete, 1);
    console.log("ToDo is removed");
}