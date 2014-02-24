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
	alert("day is added!")
	});

	view.addToScheduleButton.click(function(){
		model.addActivity(0,0,0);
		view.updateFields();
	});

}
