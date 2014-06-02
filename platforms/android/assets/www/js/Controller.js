function Controller(aContent){
    this.mData = {};
    this.mMenu;
    this.mContent = $(aContent);
};

Controller.prototype.initialize = function(onComplete){
    var self = this;

    $.get('data/content.json', function(aData){
        self.mData = (typeof aData === "string") ? JSON.parse(aData) : aData;
        onComplete();
    });
};

Controller.prototype.navigate = function(aUrl){

    var self = this;
    function navigate_home(){
        var aHome = new Home(self.mContent);
        aHome.initialize();
    }

    function _navigate(){
        var aContent = new Content(self.mContent, aUrl, function(){});
        aContent.initialize();
    }

    switch(aUrl){
        case Controller.NAV_HOME:
            navigate_home();
            break;
        default:
            _navigate();
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
