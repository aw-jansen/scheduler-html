//OverViewController Object constructor
var InputFormViewController = function(view, model ) {

	view.cancelButton.click(function(){
		window.stage("overView");
	});

	view.saveButton.click(function(){
	var act = new Activity($('#titleInput').val(),$('#timeInput').val(),$("#activityType").find(":selected").val(),"Some description");
	model.addParkedActivity($('#titleInput').val());
	//	model.addParkedActivity($("#category").find(":selected").text());
		window.stage("overView");
	});
}