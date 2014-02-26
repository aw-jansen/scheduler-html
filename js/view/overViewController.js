//OverViewController Object constructor
var OverViewController = function(view, model) {

	view.addActivityButton.click(function(){
		window.stage();
	});

	view.parkActivityButton.click(function(){
		model.moveActivity(0, 0, null, 0) 
	});

	view.addDayButton.click(function(){
		model.addDay();
	});

	view.addToScheduleButton.click(function(){
		model.addActivity(new Activity("LikkendeAnusBal xD",45,1,""),1); 
		});
	/*
	view.parkedActivityBox.droppable({

		drop: function(event, ui){
			alert("day"+ui.draggable.attr('day'));
			alert("position"+ui.draggable.attr('position'));
			model.moveActivity(ui.draggable.attr('day'), ui.draggable.attr('position'), null, 0)
			view.updateActivityList();
			view.updateParkedActivityList();
			
			}
	});*/


}
