//OverViewController Object constructor
var OverViewController = function(view, model ) {

	view.addActivityButton.click(function(){
		window.stage("inputFormView");
		//view.updateFields();
	});

	view.parkActivityButton.click(function(){
		model.moveActivity(0, 0, null, 0) 
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

	view.parkedActivityBox.droppable({
		activeClass: "ui-state-default",
		hoverClass: "ui-state-hover",
		drop: function(event, ui){
			alert("day"+ui.draggable.attr('day'));
			alert("position"+ui.draggable.attr('position'));
			model.moveActivity(ui.draggable.attr('day'), ui.draggable.attr('position'), null, 0) 
			view.updateParkedActivityList();
			view.updateActivityList();
			}
	});


}
