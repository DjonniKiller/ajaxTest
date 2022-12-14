$(function () {
	$.ajax({
		url: 'https://jsonplaceholder.typicode.com/users',
		success: (data) => {
			data.forEach(el => {
				$('#users').append(`<option class='select_option' value=${el.id}>${el.name}</option>`);
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
					if (parseInt(el['userId']) === parseInt(event.target.value))
						$('#todos').append(`<option class='select_option' value=${el.id}>${el.title}</option>`);
				});
			}
		});
	});

	$('#todos').change((event) => {
		$('#result').html('');

		$.ajax({
			url: 'https://jsonplaceholder.typicode.com/todos',
			success: (data) => {
				obj = data.find(el => {
					return parseInt(el.id) === parseInt(event.target.value);
				});

				for (key in obj)
					$('#result').append(`<li class='list_row'>${key}: ${obj[key]}</li>`);
			}
		});
	});
});
