function SideMenu(aContainer){
    this.mContainer = $(aContainer);
};

SideMenu.prototype.initialize = function(){
    var self = this;
    var aNavigation = CONTROLLER.getNavigation();
    var aList = '';

    for(var i = 0; i < aNavigation.length; i++){
        var aItem = aNavigation[i];
        var aLi = '<li id="'+ i +'"><img id="item_icon" src="'+ aItem.icon +'" /><p id="item_label">'+ aItem.text +'</p></li>';
        aList = aList.concat(aLi);
    }

    var aDiv = '<div id="side_menu_view"><ul id="menu_list">'+ aList +'</ul></div>';
    this.mContainer.html(aDiv);


    var aLi = this.mContainer.find('li');

    for(var i = 0; i < aLi.length; i++){
        $(aLi[i]).on('touchstart', function(aElement){

            console.log("TS");

            /*var aId = $(aElement.currentTarget).attr('id');
            var aLink = aNavigation[parseInt(aId)].link;
            self.navigate(aLink);*/
        });

        $(aLi[i]).on('touchend', function(aElement){
            console.log("TE");
        });
    }
};
