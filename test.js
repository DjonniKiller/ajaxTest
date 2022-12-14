$(function () {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        success: (data) => {
            data.forEach(el => {
                $('#users').append(`<option value=${el.id}>${el['name']}</option>`);
            });
        }
    });

    $('#users').change((event) => {
        $('#todos').html('');
        $('#result').html('');

        console.log(event.target.value);
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos',
            success: (data) => {
                data.forEach(el => {
                    if (parseInt(el['userId']) === parseInt(userId.slice(0,1)))
                        $('#todos').append(`<option>${el['title']}</option>`);
                });
            }
        });
    });

    $('#todos').change(() => {
        let todoId = $("#todos :selected").text();
        char = todoId.slice(0, 1);

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos',
            success: (data) => {
                obj = data.find(obj => {
                    parseInt(obj['id']) === parseInt(todoId.slice(0, 1));
                });

                for (key in obj)
                    $('#result').append(`<p>${key}: ${obj[key]}</p>`);
            }
        });
    });
});
