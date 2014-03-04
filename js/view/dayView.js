var DayView = function (container,model,day) 
{
	var dayTitle = $("<h4>");
	var dayStartBox= $("<div class='dayStartBox'>");
	var dayTimeBox = $("<div class='dayTimeBox'>");
	var dayStart = $("<input type='time' class='inputStartTime'>");
		dayStart.attr('value',day.getStart());
		dayStart.attr('id',i);
	var dayEnd = $("<div class='dayEnd'>");
	var dayLength = $("<div>");
	var daynumber = i;
	var timeCounter = 0;
	var usableTime;

	var typeDivision = $("<div class='typeDivision'>");
	var presentationBar = $("<div class='presentationBar'>");
	var groupworkBar = $("<div class='groupworkBar'>");
	var discussionBar = $("<div class='discussionBar'>");
	var brakeBar = $("<div class='brakeBar'>");
	var warningBrakeBar = $("<div class='warningBrakeBar'>");

	var presentationTime = 0;
	var groupworkTime = 0;
	var discussionTime = 0;
	var brakeTime = 0;
	var presentationTimePer = 0;
	var groupworkTimePer = 0;
	var discussionTimePer = 0;
	var brakeTimePer = 0;

	timeCounter = parseFloat(day.getStart().slice(0,2)*60);
	timeCounter += parseFloat(day.getStart().slice(3));

	daynumber++;
	
	strDate = dayStart.val();
	arr = strDate.split(':');
	hour = parseInt(arr[0]);
	min = parseInt(arr[1]);

	dayTitle.html("DAY "+(daynumber));
	dayStartBox.html("From ");
	dayStartBox.append(dayStart);

	dayEnd.html("to "+day.getEnd());
	dayLength.html("Total Length: "+day.getTotalLength()+" min");

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
		
		if(j>0)
		{
			timeCounter = timeCounter + act.getLength();
		}

		var activityView = new ActivityView(activityContainer,model,act,timeCounter);
		var activityController = new ActivityController(activityView,model,act);

		activityBox.append(activityContainer);

		switch(day._activities[j].getType())
		{
   			case "Presentation"	:presentationTime += day._activities[j].getLength();break;
			case "Group Work"	:groupworkTime += day._activities[j].getLength();break;
			case "Discussion"	:discussionTime += day._activities[j].getLength();break;
			case "Break"		:brakeTime += day._activities[j].getLength();break;
		}
	}

	presentationTimePer = parseFloat((presentationTime/day.getTotalLength())*100);
	groupworkTimePer = parseFloat((groupworkTime/day.getTotalLength())*100);
	discussionTimePer = parseFloat((discussionTime/day.getTotalLength())*100);
	brakeTimePer = parseFloat((brakeTime/day.getTotalLength())*100);

	presentationBar.attr("style", "width:"+presentationTimePer+"%");
	groupworkBar.attr("style", "width:"+groupworkTimePer+"%");
	discussionBar.attr("style", "width:"+discussionTimePer+"%");

	if(presentationTimePer>0){
		presentationBar.html(parseInt(presentationTimePer)+"%");	
	};
	if(groupworkTimePer>0){
		groupworkBar.html(parseInt(groupworkTimePer)+"%");
	};
	if(discussionTimePer>0){
		discussionBar.html(parseInt(discussionTimePer)+"%");
	};
	if(brakeTimePer>0){
		//to avoid not adding up to 100 due to rounding:
		brakeBar.html(parseInt(brakeTimePer)+"%");
	};

	if(brakeTimePer<30)
	{
		brakeBar.attr("style", "color:#C40000;width:"+brakeTimePer+"%");
		warningBrakeBar.html("Not enough breaks!");
	}
	else
	{
		brakeBar.attr("style", "color:#0C7308;width:"+brakeTimePer+"%");
		warningBrakeBar.html("");
	}

	/*****************************************  
  			Append items to container  
	*****************************************/
	dayTimeBox.append(dayStartBox);
	dayTimeBox.append(dayEnd);

	typeDivision.append(presentationBar);
	typeDivision.append(groupworkBar);
	typeDivision.append(discussionBar);
	typeDivision.append(brakeBar);
	typeDivision.append(warningBrakeBar);


	container.append(dayTitle);
	container.append(dayTimeBox);
	//container.append(dayLength);
	container.append(activityBox);
	container.append(typeDivision)

    this.activityBox = activityBox;
    this.dayStart = dayStart;

}