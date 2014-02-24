//OverView Object constructor
var InputFormView = function (container,model) {

	function updateFields()
	{	
		updateInputFields();
	}

	var div = $("<div id='inputFormBox'>");
	var greyout = $("<div id='greyout'>");

	/*****************************************************
			Creating the activity creation box

	*****************************************************/
	var acitivityTypeDropDown = $("<select id='activityType' class='dropDown'>");
	var inputTextBox = $("<div class='planningtable'>");
	var inputTextInnerBox = $("<div>");
	var titleInput = $("<input type='textarea' id='titleInput' class='inputTitle' placeholder='Activity title'>");
	var titleInputContainer = $("<div class='planningRow'>");
	var timeInput = $("<input type='number' id='timeInput'class='inputTime'>");
	var timeInputContainer = $("<div class='planningRow'>");
	var descriptionInput = $("<input type='textarea' id='descriptionInput' class='inputDescription'>  placeholder='Activity description'");
	var descriptionInputContainer = $("<div class='planningRow'>");
	
	titleInputContainer.append(titleInput);
	timeInputContainer.append(timeInput);
	timeInputContainer.append(" min");
	descriptionInputContainer.append(descriptionInput);

	inputTextBox.html('<h3>Create New Activity</h3>');
	acitivityTypeDropDown.append("<option>Presentation</option><option>Group Work</option><option>Discussion</option><option>Break</option>");
	inputTextInnerBox.append(titleInputContainer);
	inputTextInnerBox.append(timeInputContainer);
	inputTextInnerBox.append(acitivityTypeDropDown);
	inputTextInnerBox.append(descriptionInputContainer);
	inputTextBox.append(inputTextInnerBox);

	function updateInputFields()
	{
		$(titleInput).val("");
		$(timeInput).val("");
		$(descriptionInput).val("");
	}

	var cancelButton = $("<button class='btn btn-danger'>");
	var cancelButtonContainer = $("<div class='floatleft'>");
	var saveButton = $("<button class='btn btn-success'>");
	var saveButtonContainer = $("<div class='floatleft'>");
	var buttonsContainer = $("<div>");

	saveButton.html("Save");
	saveButtonContainer.append(saveButton);
	cancelButton.html("Cancel");
	cancelButtonContainer.append(cancelButton);
	buttonsContainer.append(cancelButtonContainer);
	buttonsContainer.append(saveButtonContainer);

	/*****************************************  
	      Append all items to container
	      Bind items

	*****************************************/
	div.append(inputTextBox);
	div.append(buttonsContainer);

	container.append(greyout);
	container.append(div);

	this.updateFields = updateFields;
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
		
	}
}