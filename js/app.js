$(function()
{
	//Hiding the windows on start and only showing the landing page
	$("#inputFormView").hide();
	$("#overView").show();

	//The global variable so we can access it from other controller and views
	window.stage = function()
	{
		$("#inputFormView").toggle();
		overView.updateParkedActivityList();	
	}
	
	//We instantiate our model
	var model = new Model();
	
	//And create the needed controllers and views
   	var overView = new OverView($("#overView"),model);
   	var overViewController = new OverViewController(overView,model);

   	var inputFormView = new InputFormView($("#inputFormView"),model);
   	var inputFormViewController = new InputFormViewController(inputFormView,model);
});