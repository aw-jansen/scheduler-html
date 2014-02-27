$(function()
{
	//Hiding the windows on start and only showing the landing page
	$("#inputFormView").hide();
	$("#overView").show();

	//The global variable so we can access it from other controller and views
	window.stage = function(activity)
	{
		$("#inputFormView").toggle();
		inputFormView.updateFields(activity);
	}
	// Code binding the model to the rest of the controllers and views
   	var overView = new OverView($("#overView"),window.model);
   	var overViewController = new OverViewController(overView,window.model);

   	var inputFormView = new InputFormView($("#inputFormView"),window.model);
   	var inputFormViewController = new InputFormViewController(inputFormView,window.model);
});