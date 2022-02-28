//Variables
let $input = $('input');
let $button = $('button');
let $ul = $('ul')
let $error = $('#error-message');



//Create Task
$button.on('click', (e) => {
    //Create a li element
    let $newTodo = $('<div></div>').addClass('todo')
    let $li = $('<li></li>').text($input.val())
    let $checkbox = $('<input type="checkbox" class="box" />');
    let $x = $('<span>&times;</span>').addClass('close')

    //If input is empty, show error message
    if ($input.val() == 0) {
        $error.css('opacity', '1')
    } else {
        $error.css('opacity', '0')
            //Add Tasks to list
        $ul.append($newTodo)
        $newTodo.append($checkbox, $li, $x);
        $li.addClass('task')
    }

    //Complete Task Style
    $checkbox.click(function() {
        if ($checkbox.is(":checked")) {
            $newTodo.addClass('done')
            $li.addClass('completed');

        } else {
            $newTodo.removeClass('done')
            $li.removeClass('completed');

        }
    });

    //Clear input field
    $input.val("")

    //Eliminate Task
    $x.click(function() {
        $(this).parent().remove();
    });

});


//Working on adding local storage  *Still figuring this out lol * 
//Push Task to todoList array for Local Storage
//let $todoList = []
//let $taskNumber = 0;


//  $todoList.push({
//     id: $taskNumber,
//     task: $li.text(),
//     completed: $checkbox.val()
// })
//localStorage.setItem("task", JSON.stringify($todoList));