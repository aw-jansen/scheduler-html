//OverViewController Object constructor
var InputFormViewController = function(view, model ) {

	view.cancelButton.click(function(){
		window.stage("overView");
	});

	view.saveButton.click(function(){
		createTestData()
		window.stage("overView");
	});

}