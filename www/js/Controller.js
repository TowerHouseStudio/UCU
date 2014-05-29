function Controller(aContent){
    this.mData = {};
    this.mMenu;
    this.mContent = $(aContent);
};

Controller.prototype.initialize = function(onComplete){
    var self = this;

    $.get('/data/content.json', function(aData){
        self.mData = aData;
        onComplete();
    });
};

Controller.prototype.navigate = function(aUrl){

    var self = this;
    function navigate_home(){
        var aHome = new Home(self.mContent);
        aHome.initialize();
    }

    switch(aUrl){
        case Controller.NAV_HOME:
            navigate_home();
            break;
        default:
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
