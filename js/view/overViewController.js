//OverViewController Object constructor
var OverViewController = function(view, model ) {

	view.addActivityButton.click(function(){
		window.stage("inputFormView");
		view.updateFields();
	});

	view.parkActivityButton.click(function(){
	model.addParkedActivity("Working in groups");
	alert("working is parked")
	});

	view.addDayButton.click(function(){
		model.addDay();
		alert("day is added!")
		view.updateFields();
	});

	view.addToScheduleButton.click(function(){
		model.addActivity(new Activity("ApenNeuken",30,0,""),1); 
		view.updateFields();
		});



}
