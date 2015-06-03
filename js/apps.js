$(document).ready(function() {
	$('#show-lookup').submit(function(e){
		e.preventDefault();

		var results = $('#results'),
			search = $('#search').val(),
			apiKey = '139361-BingeBuc-TUZZBGM3';

		//collect data
		results.html('Your new addiction related to  ' + search + ' are:');
	});
});