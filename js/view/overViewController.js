//OverViewController Object constructor
var OverViewController = function(view, model) {

	view.addActivityButton.click(function(){
		window.stage();
	});

	view.addDayButton.click(function(){
		model.addDay();
	});
}
