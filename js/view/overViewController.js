//OverViewController Object constructor
var OverViewController = function(view, model ) {

	view.addActivityButton.click(function(){
		window.stage("inputFormView");
		view.updateFields();
	});

	view.parkActivityButton.click(function(){
	model.addParkedActivity("ApenNeuken");
	});

	view.addDayButton.click(function(){
		model.addDay();
		view.updateFields();
	});

	view.addToScheduleButton.click(function(){
		model.addActivity(new Activity("ApenNeuken",30,0,""),1); 
		view.updateFields();
		});



}
