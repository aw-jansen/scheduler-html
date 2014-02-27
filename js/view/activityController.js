var ActivityController = function(view, model, act) {
	view.container.click(function(){
		window.stage(act);
	});
}