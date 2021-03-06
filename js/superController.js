$(function()
{
	//Hiding the windows on start and only showing the landing page
	$("#inputFormView").hide();
	$("#overView").show();

	//The global variable so we can access it from other controller and views
	window.stage = function(act)
	{
		$("#inputFormView").toggle();
		inputFormView.updateFields(act);
	}
	// Code binding the model to the rest of the controllers and views
   	var overView = new OverView($("#overView"),window.model);
   	var overViewController = new OverViewController(overView,window.model);

   	var inputFormView = new InputFormView($("#inputFormView"),window.model);
   	var inputFormController = new InputFormController(inputFormView,window.model);
});