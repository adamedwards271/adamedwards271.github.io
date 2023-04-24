$(document).ready(function() {
    $.ajax({
        url: "facultyList.json",
        dataType: "json",
        success: function(data) {
            $.each(data.facultymembers, function(index, facultyMember) {
                var image = $('<img>').attr('src', facultyMember.image);
                var name = $('<h2>').text(facultyMember.full_name);
                var department = $('<h3>').text(facultyMember.department);
                var bio = $('<p>').text(facultyMember.bio);

                $('#faculty').append(image, name, department, bio);
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
});