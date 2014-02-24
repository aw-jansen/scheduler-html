$(function() {



	if(window.location.href.indexOf("index.html") > -1) 
	{
		
		//Hiding the windows on start and only showing the landing page
		$("#overView, #inputFormView").hide();
		$("#landingView").show();

		//The global variable so we can access it from other controller and views
		window.stage = function(value)
		{
			switch(value)
	   		{
		   		case "landingView":
		   			$("#overView, #inputFormView").hide();
		   			$("#landingView").show();
		   			break;

		   		case "overView":
		   			overView.updateFields();
		   			$("#landingView, #inputFormView").hide();
		   			$("#overView").show();
		   			break;

		   		case "inputFormView":
		   			inputFormView.updateFields();
		   			var strWindowFeatures = "location=yes,height=400,width=300,scrollbars=yes,status=yes";
					var URL = "inputForm.html";
					var win = window.open(URL, "_blank", strWindowFeatures);
		   			//$("#landingView, #overView").hide();
		   			//$("#inputFormView").show();
		   			break;

	   		}
		}
	}
	
	//We instantiate our model
	var model = new Model();
	var day = new Day();

	    //createTestData();
	
	//And create the needed controllers and views
   	var landingView = new LandingView($("#landingView"),model);
   	var landingViewController = new LandingViewController(landingView,model);

   	var overView = new OverView($("#overView"),model);
   	var overViewController = new OverViewController(overView,model);

   	var inputFormView = new InputFormView($("#inputFormView"),model);
   	var inputFormViewController = new InputFormViewController(inputFormView,model);
});