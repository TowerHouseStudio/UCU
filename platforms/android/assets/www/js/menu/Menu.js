function Menu(aContainer){
    this.mContainer = $(aContainer);
    this.mBack;
    this.mCurrentBack = Controller.NAV_HOME;
};

Menu.prototype.initialize = function(){
    var self = this;
    this.getViewHTML(function(aContent){
        self.mContainer.html(aContent);

        self.mBack = $(self.mContainer.find("#menu_back"));

    });
};

Menu.prototype.showBackArrow = function(aBackUrl){
    this.mCurrentBack = aBackUrl;
    this.mBack.css('visibility', 'visible');
    this.mBack.on('tap', $.proxy(this.onBackClick, this));
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
