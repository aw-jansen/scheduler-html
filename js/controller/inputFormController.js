//OverViewController Object constructor
var InputFormController = function(view, model) {

	view.cancelButton.click(function(){
		window.stage();
	});

	view.saveButton.click(function(){

		if( ($('#titleInput').val()!= "") && ($('#timeInput').val()!= "") && ($("#descriptionInput").val()!="") )
		{	
			if (view.currentActivity != null)
			{
				view.currentActivity.setName($('#titleInput').val());
				view.currentActivity.setLength(parseFloat($('#timeInput').val()));
				view.currentActivity.setTypeId($('option:selected',$('#activityType')).index());
				view.currentActivity.setDescription($("#descriptionInput").val());
			}
			else	
			{
				model.addParkedActivity(new Activity($('#titleInput').val(),parseFloat($('#timeInput').val()),$('option:selected',$('#activityType')).index(),$("#descriptionInput").val()));
			}
			window.stage();
		}
		else
		{
			alert('Please fill out all the fields.');
		}
		
	});
}