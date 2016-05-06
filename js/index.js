$(document).ready(function() {
	var $randomButton = $('#searchRow #randomButton');
	var $searchButton = $('#searchRow #searchButton');
	var $results = $('.results');

	//random button, random article
	$randomButton.on('click', function() {
		window.open('http://en.wikipedia.org/wiki/Special:Random');
	}); //end random button click

	var apiWiki = "https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch=";

	$searchButton.on('click', function(e) {
		e.preventDefault();

		var apiUrl = apiWiki + $('#searchInput').val() + "&callback=?";
		$.ajax({
			url: apiUrl,
			dataType: 'json',
			type: 'POST',
			success: function(data) {
					var snippetArr = data.query.search;

					snippetArr.forEach(function(item) {
						$results.append('<a href="https://en.wikipedia.org/wiki/' + item.title + '">' +
							'<li class="resultCard list-unstyled">' +
							'<h4>' + item.title + '</h4>' +
							'<blockquote>' + item.snippet + '</blockquote>' +
							'</li></a>');
					});
							$('li').mouseover(function(){
								$(this).css('border-left', '5px solid #e7e387');
							});
							$('li').mouseout(function(){
								$(this).css('border-left', '5px solid #ff8873');
							});
				} //end success

		});
	}); //end search button click

});//end .ajax