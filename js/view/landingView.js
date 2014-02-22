// The view of the landing page should be created here like this : 
// https://kth-csc.mybalsamiq.com/projects/dh2641-vt14-lab4assignment-web/home

//LandingView Object constructor
var LandingView = function (container,model) 
{
	//div we just store in temporary variable because we won't need it later
	var row = $("<div>");
	var div = $("<div>");
	var h2 = $("<h2>");
	var p = $("<P>");
	var button = $("<button>");

	h2.html("A Meeting Agenda Builder");
	p.html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, quasi, quam excepturi eos hic ipsa culpa. Totam, reiciendis, nulla, numquam, iure eius magnam quae sint illo architecto quibusdam debitis omnis.");
	button.html("Create new meeting");

	row.addClass('row');
	div.addClass('col-md-4');
	div.addClass('col-md-offset-4');
	div.attr('id','introBox');

	button.addClass('btn');
	button.attr('id','startButton');
	
	div.append(h2);
	div.append(p);
	div.append(button);
	row.append(div);

	this.startButton = button;

	container.append(row);
}