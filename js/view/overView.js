//OverView Object constructor
var OverView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var div = $("<div id='midrow' class='row'>");
	var left = $("<div id='leftbox' class='col-md-3'>");
	var right = $("<div id='rightbox' class='col-md-9'>");

	/*****************************************************

				Creating Left menu

	*****************************************************/

	var parkedActivityList = $("<ul id='parkedActivityList'>");
	var addActivityButton = $("<button class='btn btn-success' style='width:100%; margin-top:10px;'>");
	var addActivityButtonContainer = $("<div id='addActivityButton'>");
	var numberOfParkedActivities = $("<p>");
	var numberOfParkedActivitiesContainer = $("<div>");

	/****************************************************
				Creating variables that 
				can be accessed by controller

	****************************************************/

	addActivityButton.html("Add activity");
	addActivityButtonContainer.append(addActivityButton);

	function updateParkedActivityList()
	{	
		parkedActivityList.empty();
		
		for(i=0; i<model.parkedActivities.length; i++)
		{	
			var act = model.parkedActivities[i];
			var parkedActivityContainer = $("<li class='activityContainer'>");
			var parkedActivityView = new ParkedActivityView(parkedActivityContainer,model,act);
			var activityController = new ActivityController(parkedActivityView,model,act);
			parkedActivityList.append(parkedActivityContainer);
		}

		var parkedActivityListController = new ParkedActivityListController(parkedActivityList,model);
		numberOfParkedActivities.html("Number of parked activities: "+model.parkedActivities.length);
	}

	/*****************************************  
	      		Append items to left  
	*****************************************/
	left.append(addActivityButtonContainer);
	left.append(parkedActivityList);
	left.append(numberOfParkedActivities);
	
	
	/*****************************************************

				Creating the right box

	*****************************************************/
	
	//Add Day Overview
	var dayOverviewContainer = $("<div class='dayOverviewContainer'>");
	var dayOverview  = $("<div class='dayOverview'>");

	function updateActivityList()
	{	
		dayOverview.empty();

		// Loops trhough all days
		for(i=0; i<model.days.length; i++)
		{	
			var day = model.days[i];
			var dayBox = $("<div class='dayContainer'>");
				dayBox.attr('value',i);
				dayBox.attr('id',i);

			var dayView = new DayView(dayBox,model,day);
			var dayController = new DayController(dayView,model);

			dayOverview.append(dayBox);
			dayOverviewContainer.prepend(dayOverview);
		}
	}

	// Add Day button
	var addDayButton = $("<button id='addDayButton' class='btn btn-success'>");
	var addDayButtonContainer = $("<div id='addDayButtonContainer' class='activityBox'>");
	addDayButton.html("Add Day");

	addDayButtonContainer.append(addDayButton);
	dayOverviewContainer.append(addDayButtonContainer);

	/*****************************************  
	      Append items to right  
	*****************************************/
	right.append(dayOverviewContainer);

	/*****************************************  
	      Append all items to container
	      Bind items

	*****************************************/

	div.append(left);
	div.append(right);

	container.append(div);
	this.parkedActivityList = parkedActivityList;
	this.updateParkedActivityList = updateParkedActivityList;
	this.updateActivityList = updateActivityList;
	this.addDayButton = addDayButton;
	this.addActivityButton = addActivityButton;
	
	/*****************************************  
	      Observer implementation    

	*****************************************/
	
	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		updateActivityList();
		updateParkedActivityList();
	}
	
	model.addDay();

	createTestData();

	function createTestData()
	{
		model.addParkedActivity(new Activity("1",10,0,"1"));
		model.addParkedActivity(new Activity("2",10,0,"2"));
		model.addParkedActivity(new Activity("3",10,0,"3"));
		model.addParkedActivity(new Activity("4",10,0,"4"));
		model.addParkedActivity(new Activity("5",10,0,"5"));
		model.addParkedActivity(new Activity("6",10,0,"6"));
	}
	
}