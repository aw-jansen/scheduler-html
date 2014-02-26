//OverView Object constructor
var OverView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	var div = $("<div class='row'>");
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

	addActivityButton.html("Add activity");
	addActivityButtonContainer.append(addActivityButton);

	function updateParkedActivityList()
	{	
		parkedActivityList.empty();
		
		for(i=0; i<model.parkedActivities.length; i++)
		{	
			var parkedActivityContainer = $("<li class='activityContainer'>");
			var parkedActivityDurationbox = $("<div class='activityDurationBox'>");
			var parkedActivityNamebox = $("<div class='activityNameBox'>");
			var closeSymbol =$("<div class='activityCloseBox'>");
			closeSymbol.append("<img src='images/close.png'>")
			closeSymbol.attr('value',i);
			
			parkedActivityContainer.attr('position',i);
			parkedActivityNamebox.append(model.parkedActivities[i].getName());
			parkedActivityDurationbox.html(model.parkedActivities[i].getLength()+ " min");
			parkedActivityNamebox.append(closeSymbol);


			switch(model.parkedActivities[i].getType())
	   		{
		   		case "Presentation":parkedActivityNamebox.addClass('presentation'); break;
	   			case "Group Work":	parkedActivityNamebox.addClass('groupwork'); break;
	   			case "Discussion":	parkedActivityNamebox.addClass('discussion'); break;
	   			case "Break":		parkedActivityNamebox.addClass('break'); break;
		   	}

		   	parkedActivityContainer.append(parkedActivityDurationbox);
			parkedActivityContainer.append(parkedActivityNamebox);
			parkedActivityList.append(parkedActivityContainer);

			// Making the stuff draggable
			/*
			$(parkedActivityContainer).draggable(
			{
				appendTo:"body",
				helper:"clone",
			}).data('activity',model.parkedActivities[i]);
			*/

			// Removes activities
			closeSymbol.click(function() { 
		    	removeID = $(this).attr('value');
				model.removeParkedActivity(removeID);
				updateParkedActivityList();
			});
		}

			parkedActivityList.sortable({
		      items: "li:not(.placeholder)",
		      connectWith: "ul",
		      cancel: ".activityCloseBox",
		      sort: function() 
		      {
		        $( this ).removeClass( "ui-state-default" );
		      },
		      update:function(event,ui)
		      {
				if (this === ui.item.parent()[0]) 
				{
					model.moveActivity(parseFloat(ui.item.attr('day')),parseFloat(ui.item.attr('position')),null,ui.item.index());
				}
		      },
		    }).disableSelection();

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
	left.append(parkedActivityList);
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
				dayBox.attr('value',i);
				dayBox.attr('id',i);
			var dayTitle = $("<h4>");
			var dayStartBox= $("<div>");
			var dayStart = $("<input type='time' class='inputStartTime'>");
				dayStart.attr('value',model.days[i].getStart());
				dayStart.attr('id',i);
			var dayEnd = $("<p>");
			var dayLength = $("<p>");
			var daynumber = i;

			daynumber++;
			
			strDate = dayStart.val();
			arr = strDate.split(':');
			hour = parseInt(arr[0]);
			min = parseInt(arr[1]);

			dayTitle.html("Day "+(daynumber));
			dayStartBox.html("Start time ");
			dayStartBox.append(dayStart);
			dayEnd.html("Day end: "+model.days[i].getEnd());
			dayLength.html("Total Length: "+model.days[i].getTotalLength()+" min");

			var activityBox = $("<ul class='activityBox'>");
			activityBox.empty();
			activityBox.attr('id',i);
			activityBox.attr('day',i);
			activityBox.attr('position',i);

			// Loops trhough all activities in each day
			for(j=0; j<model.days[i]._activities.length; j++)
			{

				var activityContainer = $("<li class='activityContainer'>");
				var activityDurationbox = $("<div class='activityDurationBox'>");
				var activityNamebox = $("<div class='activityNameBox'>");

				switch(model.days[i]._activities[j].getType())
		   		{
			   		case "Presentation"	:activityNamebox.addClass('presentation');break;
		   			case "Group Work"	:activityNamebox.addClass('groupwork');break;
		   			case "Discussion"	:activityNamebox.addClass('discussion');break;
		   			case "Break"		:activityNamebox.addClass('break');break;
				}
				activityNamebox.append(model.days[i]._activities[j].getName());
				activityDurationbox.html(model.days[i]._activities[j].getLength()+ " min");

				activityContainer.attr('day',[i]);
				activityContainer.attr('position',[j]);
				activityContainer.append(activityDurationbox);
				activityContainer.append(activityNamebox);
				activityBox.append(activityContainer);	
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
				updateActivityList();
			}); 

			$(".inputStartTime").change(function() { 
				strDate =  $(this).val();
				arr = strDate.split(':');
				hour = parseInt(arr[0]);
				min = parseInt(arr[1]);
				model.days[$(this).attr('id')].setStart(hour,min);
				dayEnd.html("Day end: "+model.days[$(this).attr('id')].getEnd());
				updateActivityList();
			}); 

			/******************************
				Drag & Drop Interaction

			******************************/

			activityBox.droppable({
				activeClass: "ui-state-default",
				hoverClass: "ui-state-hover",
				accept: ":not(.ui-sortable-helper)",
				drop: function( event, ui ) 
				{
					model.moveActivity(null,parseFloat(ui.draggable.attr('position')),parseFloat(this.id),0);
				}

		    }).sortable({
		      items: "li:not(.placeholder)",
		      connectWith: "ul",
		      sort: function() 
		      {
		        $( this ).removeClass( "ui-state-default" );
		        //var act = ui.draggable.data('activity');
		        //model.moveActivity()
		      },
		      update:function(event,ui)
		      {
				if (this === ui.item.parent()[0]) 
				{
					if(ui.item.attr('day')!= null)
					{
						model.moveActivity(parseFloat(ui.item.attr('day')),parseFloat(ui.item.attr('position')),parseFloat(this.id),ui.item.index());
					}
					else
					{
						model.moveActivity(null,parseFloat(ui.item.attr('position')),parseFloat(this.id),ui.item.index());
					}
				}
				else
				{

				}
		      },
		    }).disableSelection();
		    //.data('activity',model.days[i].);
		}
		
	}

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

	div.append(left);
	div.append(right);

	container.append(div);
	this.parkedActivityList = parkedActivityList;
	this.updateParkedActivityList = updateParkedActivityList;
	this.updateActivityList = updateActivityList;
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