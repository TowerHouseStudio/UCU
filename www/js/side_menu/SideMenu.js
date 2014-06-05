function SideMenu(aContainer, aMenu){
    this.mContainer = $(aContainer);
    this.mMenu = aMenu;
    this.mDiv;
    this.mCloseButton;
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

    this.mDiv = $('<div id="side_menu_view"><ul id="menu_list">'+ aList +'</ul><div id="menu_icon"><div id="menu_icon_container"><img id="menu_icon_image" src="img/menu/menu.png"/></div></div></div>');
    this.mContainer.html(this.mDiv);

    this.mCloseButton = this.mContainer.find('#menu_icon');

    var aLi = this.mContainer.find('li');
    this.mContainer.css("pointer-events", "all");

    for(var i = 0; i < aLi.length; i++){
        $(aLi[i]).on('touchstart', function(aElement){

            $(aElement.currentTarget).addClass('touchStart');

        });

        $(aLi[i]).on('touchend', function(aElement){
            $(aElement.currentTarget).removeClass('touchStart');

            var aId = $(aElement.currentTarget).attr('id');
            var aLink = aNavigation[parseInt(aId)].link;
            CONTROLLER.navigate(aLink);
            CONTROLLER.getMenu().showBackArrow(Controller.NAV_HOME);
            self.closeMenu();
        });
    }

    this.mCloseButton.on("tap", $.proxy(this.closeMenu, this));
};

SideMenu.prototype.closeMenu = function(){
    this.mContainer.css("pointer-events", "none");
    this.mMenu.closeSideMenu(this.mDiv);
};
