var ActivityView = function (container,model,act,timeCounter) 
{
	var activityDurationbox = $("<div class='activityDurationBox'>");
	var activityNamebox = $("<div class='activityNameBox'>");

	switch(act.getType())
	{
   			case "Presentation"	:activityNamebox.addClass('presentation');break;
			case "Group Work"	:activityNamebox.addClass('groupwork');break;
			case "Discussion"	:activityNamebox.addClass('discussion');break;
			case "Break"		:activityNamebox.addClass('break');break;
	}

	activityNamebox.append(act.getName());
	
	var h = ("0"+Math.floor(timeCounter/60)).slice(-2);
	var m = ("0"+Math.floor(timeCounter % 60)).slice(-2);
	var usableTime = h+":"+m;

	activityDurationbox.html(usableTime);

	container.attr('day',i);
	container.attr('position',j);
	container.append(activityDurationbox);
	container.append(activityNamebox);

	this.container = container;
}