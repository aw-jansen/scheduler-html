//OverViewController Object constructor
var InputFormViewController = function(view, model ) {

	view.cancelButton.click(function(){
		window.stage("overView");
	});

	view.saveButton.click(function(){

		if( ($('#titleInput').val()!= "") && ($('#timeInput').val()!= "") && ($("#descriptionInput").val()!="") )
		{
			model.addParkedActivity(new Activity($('#titleInput').val(),$('#timeInput').val(),$("#activityType").find(":selected").val(),$("#descriptionInput").val()));
			window.stage("overView");
		}
		else
		{
			alert('Please fill out all the required fields.');
		}
		
	});
}