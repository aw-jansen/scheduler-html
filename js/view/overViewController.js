//OverViewController Object constructor
var OverViewController = function(view, model ) {

	view.addActivityButton.click(function(){
		window.stage("inputFormView");
		//view.updateFields();
	});

	view.parkActivityButton.click(function(){
		model.moveActivity(1, 0, 0, 0) 
		view.updateFields();
	});

	view.addDayButton.click(function(){
		model.addDay();
		view.updateActivityList();
	});

	view.addToScheduleButton.click(function(){
		model.addActivity(new Activity("LikkendeAnusBal xD",45,1,""),1); 
		view.updateActivityList();
		});



}
