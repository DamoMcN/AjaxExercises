$(document).ready(function () {
	// Pulls text from txt file and places in p element
	$("#load").on("click", function () {
		$('#contentArea').load('info.txt');
	});
	// 			----------END----------




	// generates dog images when "fetch dog" button is pressed
	$('#fetchDog').on('click', function () {
		$.get('https://dog.ceo/api/breeds/image/random', function(data) {

			console.log(data);
			var doggy = data.message;
			$('#imageDog').attr("src", doggy);
		});

	});
	// 			----------END----------

	// Accesses API and replaces userImg and userEmail with data from it

	$('#genUser').on('click', function () {
		$.get('https://randomuser.me/api/', function(data) {
			const user = data.results[0];

			$("#userImg").attr("src", user.picture.large);
			$("#userEmail").text(user.email);
		});	
	});

	// 			----------END----------


	// Accesses API and places 5 dog images at a time

	$('#dogGalleryBtn').on('click', function () {
    $.get('https://dog.ceo/api/breeds/image/random/5', function(data) {

        $('#dogContainer').empty();

        $.each(data.message, function (index, url) {
            $('#dogContainer').append(
                '<img src="' + url + '" class="galleryImg">'
            );
        });

    });
});	
	});

	// 			----------END----------


