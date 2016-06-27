
<script src="../data/movies.js"></script>


function set_grid(data){
    var html = "";
    html += "<table class='grid-view'>";
    for(var i=0; i < data.length; i++){
        html += "<tr class='row'>"
        html += "<td> <img class='images' src='" + data[i]["photos"]+ "'> <div class='movie'><p class='title'>"+ data[i]["title"] 
        + "</p>" + "<p class='year'>" + data[i]["year"] + "</p>" + "<p class='starring'>" + data[i]["starring"] + "</p> </div></td></tr>";
    }
    html += "</table>"
    return html;
}

function set_list(data){
     var html = "";
   html += "<table class='grid-view'>";
    for(var i=0; i < data.length; i++){
        html += "<tr class='row'>"
        html += "<td> <img class='images' src='" + data[i]["photos"]+ "'> <div class='movie'><p class='title'>"+ data[i]["title"] 
        + "</p>" + "<p class='year'>" + data[i]["year"] + "</p>" + "<p class='starring'>" + data[i]["starring"] +"</p> <p class='description'>"+ data[i]["description"] +"</p> </div></td></tr>";
    }
    html += "</table>"
    return html;
}
function create_grid(movies){
    return set_grid(movies);
}