//OverViewController Object constructor
var InputFormViewController = function(view, model ) {

	view.cancelButton.click(function(){
		window.stage("overView");
	});

	view.saveButton.click(function(){

		if( ($('#titleInput').val()!= "") && ($('#timeInput').val()!= "") && ($("#descriptionInput").val()!="") )
		{	
			model.addParkedActivity(new Activity($('#titleInput').val(),$('#timeInput').val(),$('option:selected',$('#activityType')).index(),$("#descriptionInput").val()));
			window.stage("overView");
		}
		else
		{
			alert('Please fill out all the fields.');
		}
		
	});
}