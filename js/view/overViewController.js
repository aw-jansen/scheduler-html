//OverViewController Object constructor
var OverViewController = function(view, model ) {

	view.addActivityButton.click(function(){
		window.stage("inputFormView");
	});

	view.parkActivityButton.click(function(){
	model.addParkedActivity("Working in groups");
	alert("working is parked")
	});

	view.addDayButton.click(function(){
	model.addDay();
	 createTestData();
	alert("day is added!")
	});

}
