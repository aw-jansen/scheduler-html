//OverView Object constructor
var OverView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.parkedActivityBox = container.find("#parkedActivityBox");
	this.numberOfParkedActivities = container.find("#numberOfParkedActivities");
	this.activityBox = container.find("#activityBox");

	function updateFields()
	{	
		updateActivityList();
		updateParkedActivityList();
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
		
		for(i=0; i<model.parkedActivities.length; i++)
		{
			parkedActivityBox.append("<tr><td>"+model.parkedActivities[i].getName()+"</td><td>"+model.parkedActivities[i].getLength()+"</td></tr>");
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

				Creating the right box

	*****************************************************/
	var dayOverview  = $("<div class='dayOverview'>");
	var buttonsContainer = $("<div class='row'>");
	var buttons = $("<div>");

	var parkActivityButton = $("<button class='btn btn-success'>");
	var parkActivityButtonContainer = $("<div class='buttonContainer'>");
	parkActivityButton.html("Park activity");
	parkActivityButtonContainer.append(parkActivityButton);

	var addDayButton = $("<button class='btn btn-success'>");
	var addDayButtonContainer = $("<div class='buttonContainer'>");
	addDayButton.html("Add Day");
	addDayButtonContainer.append(addDayButton);

	var addToScheduleButton = $("<button class='btn btn-success'>");
	var addToScheduleButtonContainer = $("<div class='buttonContainer'>");
	addToScheduleButton.html("Add To Schedule");
	addToScheduleButtonContainer.append(addToScheduleButton);

	buttons.append(parkActivityButtonContainer);
	buttons.append(addDayButtonContainer);
	buttons.append(addToScheduleButtonContainer);
	buttonsContainer.append(buttons);

	

	function updateActivityList()
	{	
		dayOverview.empty();

		for(i=0; i<model.days.length; i++)
		{	
			var dayBox = $("<div class='dayContainer'>");
			var dayTitle = $("<h4>");
			var dayStart = $("<p>");
			var dayEnd = $("<p>");
			var dayLength = $("<p>");
			var activityBox = $("<table id='activityTable' class='table'>");
			activityBox.append("<tr><td><b>Activity Name</b></td><td><b>Activity Time</b></td></tr>");

			for(j=0; j<model.days[i]._activities.length; j++)
			{
				//var activityName = model.days[i]._activities[j].getName();
				//	var activityLength = model.days[0]._activities[0].getLength();
				activityBox.append("<tr><td>"+j+"</td><td>"+"test"+"</td></tr>");
			}
			dayTitle.html("Day "+i);
			dayStart.html(model.days[i].getStart());
			dayEnd.html(model.days[i].getEnd());
			dayLength.html(day.getTotalLength());

			dayBox.append(dayTitle);
			dayBox.append(dayStart);
			dayBox.append(dayEnd);
			dayBox.append(dayLength);
			dayBox.append(activityBox);
			dayOverview.append(dayBox);
		}
		
	}
	updateActivityList();

	/*****************************************  
	      Append items to right  
	*****************************************/
	right.append(dayOverview);
	right.append(buttonsContainer);
		
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
	this.addToScheduleButton = addToScheduleButton;
	
	/*****************************************  
	      Observer implementation    

	*****************************************/
	
	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){

		numberOfParkedActivities.html("Number of parked activities: "+model.parkedActivities.length);
		
		// update the overview
		updateParkedActivityList();
		updateActivityList();
	}
}
 
