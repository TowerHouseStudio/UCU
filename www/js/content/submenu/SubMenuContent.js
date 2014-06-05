function SubMenuContent(aTitle, aContainer, aContent){
    this.mTitle = aTitle;
    this.mContainer = aContainer;
    this.mContent = aContent;
};

SubMenuContent.prototype.initialize = function(){

    var self = this;
    var aList = "";

    for(var i = 0; i < this.mContent.length; i++){
        var aText = this.mContent[i].text;
        aList += "<li id='"+ i +"'><p>"+ aText +"<img src='img/submenu/submenu_arrow.png' /></p></li>";
    }

    var aDiv = "<div id='submenu_content'><p id='submenu_title'>"+ this.mTitle +"</p> <ul id='submenu_list'>"+ aList +"</ul></div>";
    this.mContainer.html(aDiv);

    var aLi = this.mContainer.find('li');

    for(var i = 0; i < aLi.length; i++){
        $(aLi[i]).on('touchend', function(aElement){

            var aId = $(aElement.currentTarget).attr('id');
            var aLink = self.mContent[parseInt(aId)].link;
            var aTitle = self.mContent[parseInt(aId)].text;
            CONTROLLER.navigate(aLink, aTitle);
            CONTROLLER.getMenu().showBackArrow(self.mContent);
        });
    }
};
