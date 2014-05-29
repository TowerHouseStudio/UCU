function Content(aContainer, aUrl, aOnComplete){
    this.mContainer = $(aContainer);
    this.mUrl = aUrl;
    this.mOnComplete = aOnComplete;
};

Content.prototype.initialize = function(){

    var self = this;
    $.get(this.mUrl, function(aData){
        self.mContainer.html(aData);
        self.mOnComplete();
    });

};
