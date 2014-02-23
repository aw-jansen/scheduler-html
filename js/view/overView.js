//OverView Object constructor
var OverView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	function updateFields()
	{	
		updateActivityList();
		updateParkedActivityList();
		//alert("parked activities: "+model.parkedActivities.length);
	}
	
	var div = $("<div class='row'>");
	var left = $("<div id='leftbox' class='col-md-3'>");
	var right = $("<div id='rightbox' class='col-md-9'>");
	var middle = $("<div id='middlebox' class='col-md-12'>");

	/*****************************************************

				Creating the menu on the left

	*****************************************************/

	var parkedActivityBox = $("<table id='activityTable' class='table'>");
	var addActivityButton = $("<button class='btn btn-success'>");
	var addActivityButtonContainer = $("<div>");
	var numberOfParkedActivities = $("<p>");
	var numberOfParkedActivitiesContainer = $("<div>");

	addActivityButton.html("Add activity");
	addActivityButtonContainer.append(addActivityButton);

	parkedActivityBox.append("<tr><td><b>Activity Name</b></td><td><b>Activity Time</b></td></tr>");


	function updateParkedActivityList()
	{	
	
		$(parkedActivityBox).find("tr:gt(0)").remove();
		alert("parked activities: "+model.parkedActivities.length);
		for(i=0; i<model.parkedActivities.length; i++)
		{
			parkedActivityBox.append("<tr><td>"+model.parkedActivities[i]+"</td><td>"+"test"+"</td></tr>");
		}
	}
	updateParkedActivityList();

	numberOfParkedActivities.html("Number of parked activities: "+model.parkedActivities.length);
	//parkedActivityBox.append(numberOfParkedActivitiesContainer);

	/*****************************************  
	      Append items to left  
	*****************************************/
	left.append(parkedActivityBox);
	left.append(numberOfParkedActivities);
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
	var activityBox = $("<table id='activityTable' class='table'>");
	activityBox.append("<tr><td><b>Activity Name</b></td><td><b>Activity Time</b></td></tr>");

	var parkActivityButton = $("<button class='btn btn-success'>");
	var parkActivityButtonContainer = $("<div>");
	parkActivityButton.html("Park activity");
	parkActivityButtonContainer.append(parkActivityButton);

	var addDayButton = $("<button class='btn btn-success'>");
	var addDayButtonContainer = $("<div>");
	addDayButton.html("Add Day");
	addDayButtonContainer.append(addDayButton);

	function updateActivityList()
	{	
		$(activityBox).find("tr:gt(0)").remove();
		alert("amount of days:"+model.days.length);

		for(i=0; i<model.days.length; i++)
		{
			alert("paasei");
			var day = $("<div>");

			//for(j=0; j<4; j++)
			
				var activityName = model.days[0]._activities[0].getName();
				var activityLength = model.days[0]._activities[0].getLength();
			activityBox.append("<tr><td>"+activityName+"</td><td>"+activityLength+"</td></tr>");
		
		}
	}
	updateActivityList();

	/*****************************************  
	      Append items to right  
	*****************************************/
	right.append(activityBox);
	right.append(parkActivityButtonContainer);
	right.append(addDayButtonContainer);
	


	/*****************************************  
	      Append all items to container
	      Bind items

	*****************************************/
	div.append(middle);
	div.append(left);
	div.append(right);

	container.append(div);

	this.updateFields = updateFields;
	this.parkActivityButton = parkActivityButton;
	this.addDayButton = addDayButton;
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
		updateParkedActivityList();
		
	}
}
 
