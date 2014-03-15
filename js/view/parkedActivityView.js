//OverView Object constructor
var ParkedActivityView = function (container,model,act) {

	var parkedActivityDurationbox = $("<div class='activityDurationBox'>");
	var parkedActivityNamebox = $("<div class='activityNameBox'>");
	var closeSymbol =$("<div class='activityCloseBox'>");
	closeSymbol.append("<img src='images/close.png'>")
	closeSymbol.attr('value',i);
	
	
	parkedActivityNamebox.append(act.getName());
	parkedActivityDurationbox.html(act.getLength()+ " min");
	parkedActivityNamebox.append(closeSymbol);

	switch(model.parkedActivities[i].getType())
	{
   		case "Presentation":parkedActivityNamebox.addClass('presentation'); break;
		case "Group Work":	parkedActivityNamebox.addClass('groupwork'); break;
		case "Discussion":	parkedActivityNamebox.addClass('discussion'); break;
		case "Break":		parkedActivityNamebox.addClass('break'); break;
   	}

   	container.attr('position',i);
   	container.append(parkedActivityDurationbox);
	container.append(parkedActivityNamebox);

	this.container = container;
	this.closeSymbol = closeSymbol;
}