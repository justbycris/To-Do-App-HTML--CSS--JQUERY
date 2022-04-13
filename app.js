//Variables
let $input = $('input');
let $button = $('button');
let $ul = $('ul')
let $error = $('#error-message');
var $deleteAll = $('#clear-todos')
var $allTodos = $('.todos')

$(document).ready(function() {
    console.log('hello')
    getTodos();
});
//Create Task
$button.on('click', (e) => {
    //Create a li element
    let $newTodo = $('<div></div>').addClass('todo')
    let $li = $('<li></li>').text($input.val())
    let $checkbox = $('<input type="checkbox" class="box" />');
    let $x = $('<span>&times;</span>').addClass('close')


    //If input is empty, show error message and don't save empty val in locaStorage
    if ($input.val() == 0) {
        $error.css('opacity', '1')
        return;
    } else {
        $error.css('opacity', '0')
            //Add Tasks to list
        $ul.append($newTodo)
        $newTodo.append($checkbox, $li, $x);
        $li.addClass('task')
            // $checkbox.attr('id', 'isDone')
    }
    //Complete Task Style
    $checkbox.click(function() {
        if ($checkbox.is(":checked")) {
            console.log('Is checked')
            $newTodo.addClass('done')
            $li.addClass('completed');

        } else {
            $newTodo.removeClass('done')
            $li.removeClass('completed');
        }
    });

    saveLocalTodos($li.text())

    //Eliminate Task
    $x.click(function() {
        $(this).parent().remove();
    });


    //Clear input field
    $input.val("")

})


function saveLocalTodos(todo) {
    //Is there todos in local storage already?
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));

}


//Get and show the todos in localStorage
function getTodos() {

    var todos = [];
    // This worked before
    if (localStorage.getItem("todos") === null) {
        localStorage.setItem('todos', '[]');
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }



    todos.forEach(e => {
        //Create a li element
        let $newTodo = $('<div></div>').addClass('todo')
        let $li = $('<li></li>').text($input.val())
        let $checkbox = $('<input type="checkbox" class="box" />');
        let $x = $('<span>&times;</span>').addClass('close')


        $.each(todos, function(index, value) {
            $ul.append($newTodo)
            $newTodo.append($checkbox, $li, $x)
            $li.text(e)
            $li.addClass('task')

        })


        //Eliminate Task
        $x.click(function() {
            $(this).parent().remove();
            // localStorage.removeItem(this);
            console.log('this')
        });


        //If checkbox is checked, remove element 
        $('.box').change(function(e) {
            if ($(this).is(':checked')) {
                // $(this).parent('div').remove();
                $(this).parent('div').addClass('done')
                $(this).next().addClass('completed');
            };
            if ($(this).is(':checked') == false) {
                // $(this).parent('div').remove();
                $(this).parent('div').removeClass('done')
                $(this).next().removeClass('completed');
            };
        });
    });
}

$deleteAll.on('click', (e) => {
    $ul.children().remove()
    window.localStorage.clear()
    $error.css('opacity', '0')
})