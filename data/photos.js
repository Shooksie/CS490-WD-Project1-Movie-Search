$(document).ready(function () {
    var controller = new Controller(movies["movies"]);
    
});

function init(){
    load_images();
}

function Controller(data) {
    this.photos = data;
    
    /*** constants ***/
    this.photos_div="#photos";
    this.grid_icon="#grid_icon";
    this.list_icon="#list_icon";
    this.combo_box="#combo_box";
    this.photo_template="photo.html";
    
    
    //bind some events
    var self = this; //pass a reference to controller
    var make_grid_function=function(){
        self.make_grid(self);
    };
    
    var make_list_function=function(){
        self.make_list(self);
    };
    
    var sort_photos=function(){
        self.sort_photos(self);
    };
    
    $(this.grid_icon).on("click", make_grid_function);
    $(this.list_icon).on("click", make_list_function);
    $(this.combo_box).on('change',sort_photos);
    
    this.load_photos(this);
}

Controller.prototype.load_photos = function(self) {
    $.get(self.photo_template, function (template) {
        var html_maker = new htmlMaker(template); //create an html Maker
        var html = html_maker.getHTML(self.photos); //generate dynamic HTML based on the data
        $(self.photos_div).html(html);
    });
}

Controller.prototype.sort_photos=function(self){
    var by=$(self.combo_box).val().toLowerCase();
    self.photos=self.photos.sort(
            function(a,b){
                if(a[by]<b[by])
                    return -1;
                if(a[by]==b[by])
                    return 0;
                if(a[by]>b[by])
                    return 1;
            }            
            );
    
    self.load_photos(self);
}


Controller.prototype.make_grid = function (self) {
    $(self.photos_div).attr("class", "grid");
    $(self.grid_icon).attr("src", "grid_pressed.jpg");
    $(self.list_icon).attr("src", "list.jpg");
}

Controller.prototype.make_list = function (self) {
    $(self.photos_div).attr("class", "list");
    $(self.grid_icon).attr("src", "grid.jpg");
    $(self.list_icon).attr("src", "list_pressed.jpg");
}






