var ActivityController = function(view, model, act) {
	view.container.click(function(){
		window.stage(act);
	});

	if(view.closeSymbol != null)
	{
		view.closeSymbol.click(function() { 

	    	removeID = $(this).attr('value');
			model.removeParkedActivity(removeID);
		
		});
	}
	
}