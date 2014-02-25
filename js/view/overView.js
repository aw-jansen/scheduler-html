//OverView Object constructor
var OverView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	
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

				Creating Left menu

	*****************************************************/

	var parkedActivityBox = $("<div class='parkedActivityBox' id='parkedActivityBox'>");
	var addActivityButton = $("<button class='btn btn-success'  style='width:100%; margin-top:10px;'>");
	var addActivityButtonContainer = $("<div id='addActivityButton'>");
	var numberOfParkedActivities = $("<p>");
	var numberOfParkedActivitiesContainer = $("<div>");

	addActivityButton.html("Add activity");
	addActivityButtonContainer.append(addActivityButton);

	function updateParkedActivityList()
	{	parkedActivityBox.empty();
		
		for(i=0; i<model.parkedActivities.length; i++)
		{	
			var parkedActivityContainer = $("<div class='activityContainer'>");
			var parkedActivityDurationbox = $("<div class='activityDurationBox'>");
			var parkedActivityNamebox = $("<div class='activityNameBox'>");
			var closeSymbol =$("<div class='activityCloseBox'>");
			closeSymbol.html("X");
			closeSymbol.attr('value',[i]);
			
			parkedActivityNamebox.append(model.parkedActivities[i].getName());
			parkedActivityDurationbox.html(model.parkedActivities[i].getLength()+ " min");
			parkedActivityNamebox.append(closeSymbol);


			switch(model.parkedActivities[i].getType())
	   		{
		   		case "Presentation":parkedActivityNamebox.css("background", "#EFC94C"); break;
	   			case "Group Work":	parkedActivityNamebox.attr("style", "background:#E27A3F"); break;
	   			case "Discussion":	parkedActivityNamebox.attr("style", "background:#DF5A49"); break;
	   			case "Break":		parkedActivityNamebox.attr("style", "background:#45B29D"); break;
		   	}

		   	parkedActivityContainer.append(parkedActivityDurationbox);
			parkedActivityContainer.append(parkedActivityNamebox);
			parkedActivityBox.append(parkedActivityContainer);

			// Making the stuff draggable
			$(parkedActivityContainer).draggable(
			{
				appendTo:"body",
				helper:"clone",
		
			});

			//Listens for changes in StartTime for each day
			closeSymbol.click(function() { 
		    	removeID = $(this).val();
				
				model.removeParkedActivity(removeID);
				updateParkedActivityList()
			}); 



		}
		numberOfParkedActivities.html("Number of parked activities: "+model.parkedActivities.length);
	}
	updateParkedActivityList();

	// Temporary buttons for testing only --> check controller for function
	var addToScheduleButtonContainer = $("<div class='buttonContainer'>");
	var addToScheduleButton = $("<button class='btn btn-success'>");
	addToScheduleButton.html("Add Test Activity to Schedule");
	addToScheduleButtonContainer.append(addToScheduleButton);

	var testButtonsContainer = $("<div class='row'>");
	var parkActivityButton = $("<button class='btn btn-success'>");
	var parkActivityButtonContainer = $("<div class='buttonContainer'>");
	parkActivityButton.html("Park Test activity");
	parkActivityButtonContainer.append(parkActivityButton);

	testButtonsContainer.append(addToScheduleButtonContainer);
	testButtonsContainer.append(parkActivityButtonContainer);

	
	/*****************************************  
	      		Append items to left  
	*****************************************/
	left.append(addActivityButtonContainer);
	left.append(parkedActivityBox);
	left.append(numberOfParkedActivities);
	left.append(testButtonsContainer);
	
	
	/*****************************************************

				Creating the right box

	*****************************************************/
	
	//Add Day Overview
	var dayOverview  = $("<div class='dayOverview'>");

	function updateActivityList()
	{	
		dayOverview.empty();

		// Loops trhough all days
		for(i=0; i<model.days.length; i++)
		{	

			var dayBox = $("<div class='dayContainer'>");
			var dayTitle = $("<h4>");
			var dayStartBox= $("<div>");
			var dayStart = $("<input type='time' class='inputStartTime'>");
				dayStart.attr('value',model.days[i].getStart());
				dayStart.attr('id',[i]);
			var dayEnd = $("<p>");
			var dayLength = $("<p>");
			
			strDate = dayStart.val();
			arr = strDate.split(':');
			hour = parseInt(arr[0]);
			min = parseInt(arr[1]);

			dayTitle.html("Day "+(1+i));
			dayStartBox.html("Start time ");
			dayStartBox.append(dayStart);
			dayEnd.html("Day end: "+model.days[i].getEnd());
			dayLength.html("Total Length: "+model.days[i].getTotalLength()+" min");

			var activityBox = $("<div class='activityBox'>");
			activityBox.empty();

			// Loops trhough all activities in each day
			for(j=0; j<model.days[i]._activities.length; j++)
			{

				var activityContainer = $("<div class='activityContainer'>");
				var activityDurationbox = $("<div class='activityDurationBox'>");
				var activityNamebox = $("<div class='activityNameBox'>");

				switch(model.days[i]._activities[j].getType())
		   		{
			   		case "Presentation"	:activityNamebox.attr("style", "background:#EFC94C");break;
		   			case "Group Work"	:activityNamebox.attr("style", "background:#E27A3F");break;
		   			case "Discussion"	:activityNamebox.attr("style", "background:#DF5A49");break;
		   			case "Break"		:activityNamebox.attr("style", "background:#45B29D");break;
				}
				activityNamebox.append(model.days[i]._activities[j].getName());
				activityDurationbox.html(model.days[i]._activities[j].getLength()+ " min");

				activityContainer.append(activityDurationbox);
				activityContainer.append(activityNamebox);
				activityBox.append(activityContainer);	

				// Making the stuff draggable
				$(activityContainer).draggable(
				{
					appendTo:"body",
					helper:"clone",
			
				});	
			}

			/*****************************************  
	      			Append items to dayBox  
			*****************************************/

			dayBox.append(dayTitle);
			dayBox.append(dayStartBox);
			dayBox.append(dayEnd);
			dayBox.append(dayLength);
			dayBox.append(activityBox);
			dayOverview.append(dayBox);

			//Listens for changes in StartTime for each day
			$(".inputStartTime").keyup(function() { 
		    	strDate = $(this).val();
				arr = strDate.split(':');
				hour = parseInt(arr[0]);
				min = parseInt(arr[1]);
				model.days[$(this).attr('id')].setStart(hour,min);
				dayEnd.html("Day end: "+model.days[$(this).attr('id')].getEnd());
				updateActivityList()
			}); 

			$(".inputStartTime").change(function() { 
				strDate =  $(this).val();
				arr = strDate.split(':');
				hour = parseInt(arr[0]);
				min = parseInt(arr[1]);
				model.days[$(this).attr('id')].setStart(hour,min);
				dayEnd.html("Day end: "+model.days[$(this).attr('id')].getEnd());
				updateActivityList()
			}); 
		}
		
	}
	updateActivityList();

	// Add Day button
	var addDayButton = $("<button class='btn btn-success'>");
	var addDayButtonContainer = $("<div class='addDayButtonContainer'>");
	addDayButton.html("Add Day");

	addDayButtonContainer.append(addDayButton);
	

	/*****************************************  
	      Append items to right  
	*****************************************/
	right.append(dayOverview);
	right.append(addDayButtonContainer);

	/*****************************************  
	      Append all items to container
	      Bind items

	*****************************************/

	div.append(middle);
	div.append(left);
	div.append(right);

	container.append(div);
	this.updateParkedActivityList = updateParkedActivityList;
	this.updateActivityList = updateActivityList;
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
		
		// update the overview

	}
	model.addDay();
	updateActivityList();
}


 
