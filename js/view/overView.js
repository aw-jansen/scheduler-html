//OverView Object constructor
var OverView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	function updateFields()
	{
		updateActivityList();
	}
	
	var div = $("<div class='row'>");
	var left = $("<div id='leftbox' class='col-md-3'>");
	var right = $("<div id='rightbox' class='col-md-9'>");
	var middle = $("<div id='middlebox' class='col-md-12'>");

	/*****************************************************

				Creating the menu on the left

	*****************************************************/

	var activityBox = $("<table id='activityTable' class='table'>");
	var addActivityButton = $("<button class='btn btn-success'>");
	var addActivityButtonContainer = $("<div>");

	addActivityButton.html("Add activity");
	addActivityButtonContainer.append(addActivityButton);

	activityBox.append("<tr><td><b>Activity Name</b></td><td><b>Activity Time</b></td></tr>");


	function updateActivityList()
	{
		$(activityBox).find("tr:gt(0)").remove();
	
		for(i=0; i<model.parkedActivities.length; i++)
		{
			var activities = parkedActivities[i];

			activityBox.append("<tr><td>"+parkedActivities[i]['name']+"</td><td>"+"test"+"</td></tr>");
		}
	}
	updateActivityList();

	/*****************************************  
	      Append items to left  
	*****************************************/
	left.append(activityBox);
	left.append(addActivityButtonContainer);


	/*****************************************************

				Creating the middle box

	*****************************************************/

	
	
	/*****************************************  
	      Append items to middle  
	*****************************************/
	


	/*****************************************************

				Creating the right box

	*****************************************************/

	
	/*****************************************  
	      Append items to right  
	*****************************************/



	/*****************************************  
	      Append all items to container
	      Bind items

	*****************************************/
	div.append(middle);
	div.append(left);
	div.append(right);

	container.append(div);


	this.addActivityButton = addActivityButton;
	
	/*****************************************  
	      Observer implementation    

	*****************************************/
	
	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){

		// update the overview
		updateActivityList();
		
	}
}
 
