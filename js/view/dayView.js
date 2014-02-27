var DayView = function (container,model,day) 
{
	var dayTitle = $("<h4>");
	var dayStartBox= $("<div class='dayStartBox'>");
	var dayStart = $("<input type='time' class='inputStartTime'>");
		dayStart.attr('value',day.getStart());
		dayStart.attr('id',i);
	var dayEnd = $("<p>");
	var dayLength = $("<p>");
	var daynumber = i;
	var timeCounter = 0;
	var usableTime;

	timeCounter = parseFloat(day.getStart().slice(0,2)*60);
	timeCounter += parseFloat(day.getStart().slice(3));

	daynumber++;
	
	strDate = dayStart.val();
	arr = strDate.split(':');
	hour = parseInt(arr[0]);
	min = parseInt(arr[1]);

	dayTitle.html("Day "+(daynumber));
	dayStartBox.html("Start time ");
	dayStartBox.append(dayStart);
	dayEnd.html("Day end: "+day.getEnd());
	dayLength.html("Total Length: "+day.getTotalLength()+" min");

	$(dayStart).change(function() 
	{ 
		strDate =  $(this).val();
		arr = strDate.split(':');
		hour = parseInt(arr[0]);
		min = parseInt(arr[1]);
		model.days[$(this).attr('id')].setStart(hour,min);
	}); 

	var activityBox = $("<ul class='activityBox'>");
	activityBox.empty();
	activityBox.attr('id',i);
	activityBox.attr('day',i);
	activityBox.attr('position',i);

	// Loops through all activities in each day
	for(j=0; j<day._activities.length; j++)
	{
		var act = day._activities[j];
		var activityContainer = $("<li class='activityContainer'>");
		timeCounter = timeCounter + act.getLength();

		var activityView = new ActivityView(activityContainer,model,act,timeCounter);
		var activityController = new ActivityController(activityView,model,act);

		activityBox.append(activityContainer);

	}

	/*****************************************  
  			Append items to container  
	*****************************************/

	container.append(dayTitle);
	container.append(dayStartBox);
	container.append(dayEnd);
	container.append(dayLength);
	container.append(activityBox);

    this.activityBox = activityBox;
}