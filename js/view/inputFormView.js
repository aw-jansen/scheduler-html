//OverView Object constructor
var InputFormView = function (container,model) {

	function updateFields()
	{	
		updateInputFields();
	}

	var div = $("<div id='inputFormBox'>");
	var form = $("<form role='form'>");
	var greyout = $("<div id='greyout'>");

	/*****************************************************
			Creating the activity creation box

	*****************************************************/
	
	var acitivityTypeDropDownContainer = $("<div class='form-group'>");
	var acitivityTypeDropDown = $("<select class='form-control' id='activityType'>");

	acitivityTypeDropDown.append("<option>Presentation</option><option>Group Work</option><option>Discussion</option><option>Break</option>");

	var titleInputContainer = $("<div class='form-group'>");
	var titleInput = $("<input type='textarea' id='titleInput' class='form-control' placeholder='Activity title'>");
	
	var timeInputContainer = $("<div class='form-group'>");
	var timeInput = $("<input type='number' placeholder='Minute(s)' id='timeInput' class='form-control'>");
	
	var descriptionInputContainer = $("<div class='form-group'>");
	var descriptionInput = $("<input type='textarea' class='form-control' id='descriptionInput' placeholder='Activity description'>");
	
	acitivityTypeDropDownContainer.append(acitivityTypeDropDown);
	titleInputContainer.append(titleInput);

	timeInputContainer.append(timeInput);
	
	descriptionInputContainer.append(descriptionInput);

	form.html('<h3>Create New Activity</h3>');
	
	form.append(titleInputContainer);
	form.append(timeInputContainer);
	form.append(acitivityTypeDropDownContainer);
	form.append(descriptionInputContainer);

	function updateInputFields()
	{
		$(titleInput).val("");
		$(timeInput).val("");
		$(descriptionInput).val("");
	}

	var cancelButton = $("<button class='btn btn-danger'>");
	var saveButton = $("<button style='float:right' class='btn btn-success'>");
	var buttonsContainer = $("<div class='form-group'>");

	saveButton.html("Save");
	cancelButton.html("Cancel");
	buttonsContainer.append(saveButton);
	buttonsContainer.append(cancelButton);
	form.append(buttonsContainer);


	/*****************************************  
	      Append all items to container
	      Bind items

	*****************************************/
	div.append(form);
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