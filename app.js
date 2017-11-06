window.onload = function() {
    document.getElementById("search-box").focus();
}
  
$("#buton").click(function() {
    var searchBox = document.getElementById("search-box").value;
    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchBox + "&format=json&callback=?",
        async: false,
        dataType: "json",
        success: function(x){
            $("#resultText").html("Search Results");
            $("#resultsList").empty();
            for(var i=0; i<10; i++){
            $("#resultsList").append("<a href=" + x[3][i] + " target='_blank'>" + "<li>" + x[1][i] + "<br>" + x[2][i] + "</li></a>");
            };
        }
    });
});
  
$("#search-box").keypress(function(e) {
    if(e.keyCode == 13) {
        $("#buton").click();
    }
});