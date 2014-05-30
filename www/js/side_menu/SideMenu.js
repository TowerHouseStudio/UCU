function SideMenu(aContainer){
    this.mContainer = $(aContainer);
};

SideMenu.prototype.initialize = function(){
    var self = this;
    var aNavigation = CONTROLLER.getNavigation();
    var aList = '';

    for(var i = 0; i < aNavigation.length; i++){
        var aItem = aNavigation[i];
        var aLi = '<li id="'+ i +'"><div id="item_icon_container"><img id="item_icon" src="'+ aItem.icon +'" /></div><p id="item_label">'+ aItem.text +'</p></li>';
        aList = aList.concat(aLi);
    }

    var aDiv = '<div id="side_menu_view"><ul id="menu_list">'+ aList +'</ul></div>';
    this.mContainer.html(aDiv);


    var aLi = this.mContainer.find('li');
    this.mContainer.css("pointer-events", "all");

    for(var i = 0; i < aLi.length; i++){
        $(aLi[i]).on('touchstart', function(aElement){

            console.log("TS");
            $(aElement.currentTarget).addClass('touchStart');

            /*var aId = $(aElement.currentTarget).attr('id');
            var aLink = aNavigation[parseInt(aId)].link;
            self.navigate(aLink);*/
        });

        $(aLi[i]).on('touchend', function(aElement){
            console.log("TE");
            $(aElement.currentTarget).removeClass('touchStart');
        });
    }
};
