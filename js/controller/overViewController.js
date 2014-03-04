//OverViewController Object constructor
var OverViewController = function(view, model) {

	view.addActivityButton.click(function(){
		window.stage();
	});
	
	view.addDayButton.click(function(){
		$('.dayOverview').width((model.days.length+1)*$('.dayContainer').outerWidth());
		$('.dayOverviewContainer').width( ((model.days.length+1)*$('.dayContainer').outerWidth()) + 270);
		model.addDay();
	});

}
