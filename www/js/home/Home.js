function Home(aContainer){
    this.mContainer = aContainer;
};

Home.prototype.initialize = function(){

    var self = this;
    var aNavigation = CONTROLLER.getNavigation();
    var aList = '';

    for(var i = 0; i < aNavigation.length; i++){
        var aItem = aNavigation[i];
        var aLi = '<li id="'+ i +'"><img id="item_icon" src="'+ aItem.icon +'" /><p id="item_label">'+ aItem.text +'</p></li>';
        aList = aList.concat(aLi);
    }

    var aDiv = '<div id="home_view"><ul id="home_list">'+ aList +'</ul></div>';
    this.mContainer.html(aDiv);


    var aLi = this.mContainer.find('li');

    for(var i = 0; i < aLi.length; i++){
        $(aLi[i]).on('tap', function(aElement){
            var aId = $(aElement.currentTarget).attr('id');
            var aLink = aNavigation[parseInt(aId)].link;
            var aTitle = aNavigation[parseInt(aId)].text;
            self.navigate(aLink, aTitle);
        })
    }
};

Home.prototype.navigate = function(aUrl, aTitle){

    CONTROLLER.navigate(aUrl, aTitle);
};

