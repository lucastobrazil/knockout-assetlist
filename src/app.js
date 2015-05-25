var ViewModel = function () {
    var self = this;
    self.files = ko.observableArray([ ]);
    
    $.getJSON( "data/data.json", function(data) {
			self.files(data.files)
		});

	// Extra little function to show that it's a ko array
    self.removeFile = function() {
        self.files.remove(this);
    };
};

$(document).ready(function() {
    var vm = new ViewModel();
	ko.applyBindings(vm); // This makes Knockout get to work
});
