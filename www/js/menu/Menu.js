function Menu(aContainer, aSideMenuContainer, aContent){
    this.mContainer = $(aContainer);
    this.mSideMenuContainer = $(aSideMenuContainer);
    this.mContent = $(aContent);
    this.mBack;
    this.mMenuButton;
    this.mCurrentBack = Controller.NAV_HOME;
};

Menu.prototype.initialize = function(){
    var self = this;
    this.getViewHTML(function(aContent){
        self.mContainer.html(aContent);

        self.mBack = $(self.mContainer.find("#menu_back"));
        self.mMenuButton = $(self.mContainer.find("#menu_icon"));
        self.mMenuButton.on('tap', $.proxy(self.onMenuClick, self));
    });
};

Menu.prototype.onMenuClick = function(){
    this.mContent.css("pointer-events", "none");
    this.mMenuButton.off('tap');
    var aSideMenu = new SideMenu(this.mSideMenuContainer, this);
    aSideMenu.initialize();
};

Menu.prototype.closeSideMenu = function(aSideMenuDiv){
    aSideMenuDiv.remove();
    aSideMenuDiv.empty();

    this.mContent.css("pointer-events", "all");
    this.mMenuButton.on('tap', $.proxy(this.onMenuClick, this));
};

Menu.prototype.showBackArrow = function(aBackUrl){
    this.mCurrentBack = aBackUrl;
    if(this.mBack){
        this.mBack.css('visibility', 'visible');
        this.mBack.on('tap', $.proxy(this.onBackClick, this));
    }
};

Menu.prototype.hideBackArraw = function(){

    this.mBack.css('visibility', 'hidden');
    this.mBack.off('tap');
};

Menu.prototype.onBackClick = function(){
    console.log("CLICK BACK");
    this.hideBackArraw();

    CONTROLLER.navigate(this.mCurrentBack);
};

Menu.prototype.getViewHTML = function(onCompleted){
    $.get("js/menu/MenuView.html", function(aContent){
        onCompleted(aContent);
    });
};
