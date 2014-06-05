function Controller(aContent){
    this.mData = {};
    this.mMenu;
    this.mContent = $(aContent);
    this.mCurrentUrl = "";
};

Controller.prototype.initialize = function(onComplete){
    var self = this;

    $.get('data/content.json', function(aData){
        self.mData = (typeof aData === "string") ? JSON.parse(aData) : aData;
        onComplete();
    });
};

Controller.prototype.navigate = function(aUrl, aTitle){

    var self = this;
    function navigate_home(){
        var aHome = new Home(self.mContent);
        aHome.initialize();
    }

    function navigateToSubMenu(aUrl, aTitle){
        var aSubMenu = new SubMenuContent(aTitle, self.mContent, aUrl);
        aSubMenu.initialize();
    }

    function _navigate(){
        var aContent = new Content(self.mContent, aUrl, function(){});
        aContent.initialize();
    }

    if(this.mCurrentUrl != "" && aUrl != Controller.NAV_HOME){
        this.getMenu().showBackArrow(this.mCurrentUrl);
    }
    this.mCurrentUrl = aUrl;

    switch(aUrl){
        case Controller.NAV_HOME:
            navigate_home();
            break;
        default:
            if(Array.isArray(aUrl)){
                navigateToSubMenu(aUrl, aTitle)
            }else{
                _navigate();
            }
            break;
    }
};

Controller.prototype.setMenu = function(aMenu){
    this.mMenu = aMenu;
};

Controller.prototype.getMenu = function(){
    return this.mMenu;
};

Controller.prototype.getNavigation = function(){
    return this.mData.navigation;
};

Controller.NAV_HOME = "home";
