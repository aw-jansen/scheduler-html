//OverView Object constructor
var InputFormView = function (container,model) {

	var div = $("<div class='row'>");
	var left = $("<div id='leftbox' class='col-md-3'>");
	var right = $("<div id='rightbox' class='col-md-9'>");
	var middle = $("<div id='middlebox' class='col-md-12'>");

	/*****************************************************

				Creating the menu on the left

	*****************************************************/

	var cancelButton = $("<button class='btn btn-danger' id='backButton'>");
	var cancelButtonContainer = $("<div>");
	var saveButton = $("<button class='btn btn-success'>");
	var saveButtonContainer = $("<div>");

	saveButton.html("Save");
	saveButtonContainer.append(saveButton);
	cancelButton.html("Cancel");
	cancelButtonContainer.append(cancelButton);


	/*****************************************  
	      Append items to left  
	*****************************************/
	left.append(saveButtonContainer);
	left.append(cancelButtonContainer);
	

	/*****************************************  
	      Append all items to container
	      Bind items

	*****************************************/
	div.append(middle);
	div.append(left);
	div.append(right);

	container.append(div);


	this.saveButton = saveButton;
	this.cancelButton = cancelButton;
	
	/*****************************************  
	      Observer implementation    

	*****************************************/
	
	//Register an observer to the model
	model.addObserver(this);
	
	//This function gets called when there is a change at the model
	this.update = function(arg){

		// update the overview
		updateActivityList();
		
	}
}