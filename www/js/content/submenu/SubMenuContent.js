function SubMenuContent(aTitle, aContainer, aContent){
    this.mTitle = aTitle;
    this.mContainer = aContainer;
    this.mContent = aContent;
};

SubMenuContent.prototype.initialize = function(){

    var aList = "";

    for(var i = 0; i < this.mContent.length; i++){
        var aText = this.mContent[i].text;
        aList += "<li><p>"+ aText +"<img src='img/submenu/submenu_arrow.png' /></p></li>";
    }

    var aDiv = "<div id='submenu_content'><p id='submenu_title'>"+ this.mTitle +"</p> <ul id='submenu_list'>"+ aList +"</ul></div>";
    this.mContainer.html(aDiv);
};
