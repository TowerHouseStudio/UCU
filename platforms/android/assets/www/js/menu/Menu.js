function Menu(aContainer){
    this.mContainer = $(aContainer);
};

Menu.prototype.initialize = function(){
    var self = this;
    this.getViewHTML(function(aContent){
        self.mContainer.html(aContent);
    });
};

Menu.prototype.getViewHTML = function(onCompleted){
    $.get("js/menu/MenuView.html", function(aContent){
        onCompleted(aContent);
    });
};
