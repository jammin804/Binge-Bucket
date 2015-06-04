$(document).ready(function() {
	$('#show-lookup').submit(function(e){
		e.preventDefault();

		var results = $('#results'),
			search = $('#search').val(),
			apiKey = '139361-BingeBuc-TUZZBGM3';

        var requestURL = 'http://www.tastekid.com/api/similar?callback=?';


		//collect data
        $.getJSON(requestURL, {
            'apikey': apiKey,
            'q': search,
        }, function(data){
            if(data.results && data.results.length > 0)
            {
                var bingeResults = '<p>Here is what we came up with :D!</p>';
                $.each(data.results, function(i, rep){
                    if('movie' === rep.type.toLowerCase()){
                        bingeResults += '<p>';
                        bingeResults += rep.name;
                        bingeResults += '</p>';
                    }
                });
                results.html(bingeResults);
            }else {
                results.html('<p>Please enter a tv show or movie title.</p>')
            }
        });
	});

});