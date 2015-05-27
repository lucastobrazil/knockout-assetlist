var ViewModel = function (data) {
    var self = this;
    self.files = ko.observableArray([ ]);
	self.sideBarVisible = ko.observable(false);
    self.selectedRow = ko.observable();
    
    // $.getJSON( "data/data.json", function(data) {
    //     self.files(data.files);
    //     self.selectedRow(self.files()[0]);
    // });

    self.files(data.files);
    self.selectedRow(self.files()[0]);

    // Delete the item from the array
    self.removeFile = function() {
        self.files.remove(this);
        self.selectedRow()[0];
    };

    // View the sidebar 
    self.toggleSideBar = function(){
        self.sideBarVisible(!self.sideBarVisible());
    };

    // User selected a row
    self.didSelectRow = function(){
        if(self.selectedRow().filename === this.filename){
            self.sideBarVisible(false);
            self.selectedRow(false);
        }else{
            self.sideBarVisible(true);
            self.selectedRow(this);

        }
    }
    
};

$(document).ready(function() {
    $.getJSON( "data/data.json", function(data) {
        var vm = new ViewModel(data);
    	ko.applyBindings(vm); // This makes Knockout get to work
    });
});
