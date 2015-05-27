var ViewModel = function (dataObject) {
    var self = this;
    // Set files object
    self.files = ko.observableArray(dataObject.files);
    // Observable for user selection
    self.selectedRow = ko.observable(self.files()[0]);
    // Property to handle the sidebar (optional)
    self.sideBarVisible = ko.observable(false);
    
    // User selected a row
    self.selectRow = function(){
        if(self.selectedRow().filename === this.filename){
            self.sideBarVisible(false);
            self.selectedRow(false);
        }else{
            self.sideBarVisible(true);
            self.selectedRow(this);
        }
    }

    // User deleted a row
    self.removeRow = function() {
        self.files.remove(this);
        self.selectedRow()[0];
    };

    // View the sidebar 
    self.toggleSideBar = function(){
        self.sideBarVisible(!self.sideBarVisible());
    };
};

// Page Ready to go, so grab JSON data and let's do it!
$(document).ready(function() {
    $.getJSON( "data/data.json", function(data) {
        var vm = new ViewModel(data);
    	ko.applyBindings(vm);
    });
});
