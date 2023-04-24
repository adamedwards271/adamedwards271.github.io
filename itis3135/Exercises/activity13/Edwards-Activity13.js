$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "team.json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#team").html("");
            $.each(data.teammembers, function(index, teammember) {
                $("#team").append
                ("<h3>" + teammember.name + "</h3>" +
                          teammember.title + "<br>" +
                          teammember.bio + "<br>");
            });
        }
    });
});