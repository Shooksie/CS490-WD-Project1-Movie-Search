$(document).ready(function () { 
     $("#search_button").on('click',search);
     $("#field").on('keyup',search);
 });

function search() {
    var movies = movies[movies];
    var html = "";
    var value = $("#field").val(); //get the value of the text field
    var show=false; //don't show suggestions

    $.each(movies, function (i, val) {
        var start = movies[i].toLowerCase().search(value.toLowerCase().trim());
        if (start != -1) { //if there is a search match
            html += "<div class='sub_suggestions' data-item='" + movies[i] + "' >";
            html += movies[i].substring(0,start)+"<b>"+movies[i].substring(start,start+value.length)+"</b>"+movies[i].substring(start+value.length,movies[i].length);
            html += "</div>";
            show=true; //show suggestions
        }
    });
    if(show){
        $("#suggestions_box").html(html);
        //get the children of suggestions_box with .sub_suggestions class
        $("#suggestions_box").children(".sub_suggestions").on('click',function(){
            var item=$(this).attr('data-item'); //get the data
            $("#field").val(item); //show it in the field
            $("#suggestions_box").hide(); //hide the suggestion box
        });
        
        $("#suggestions_box").show();
    }
    else
       $("#suggestions_box").hide();
}
