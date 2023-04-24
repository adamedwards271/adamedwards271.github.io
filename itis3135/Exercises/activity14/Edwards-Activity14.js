$(document).ready(function() {
    // add click event handlers to the links in the sidebar
    $('#nav_list a').click(function(event) {
        event.preventDefault(); // prevent the default link behavior

        // get the filename for the JSON data
        var filename = $(this).attr('title') + '.json';

        // clear the main element
        $('main').empty();

        // use AJAX to retrieve the JSON data
        $.ajax({
            url: 'json_files/' + filename,
            dataType: 'json',
            success: function(data) {
                // build the HTML elements for the speaker data
                var speakerHtml = '<h1>' + data.speakers[0].title + '</h1>' +
                                  '<h2>' + data.speakers[0].month + '</h2>' +
                                  '<h3>' + data.speakers[0].speaker + '</h3>' +
                                  '<img src="' + data.speakers[0].image + '">' +
                                  '<p>' + data.speakers[0].text + '</p>';

                // add the speaker HTML to the main element
                $('main').html(speakerHtml);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('Error: ' + errorThrown);
            }
        });
    });
});