var ParkedActivityListController = function (view,model) {

	view.sortable({

		items: "li:not(.placeholder)",
		connectWith: "ul",
		cancel: ".activityCloseBox",
		sort: function() 
		{
		$( this ).removeClass( "ui-state-default" );
		},
		update:function(event,ui)
		{
		if (this === ui.item.parent()[0]) 
		{
			if(ui.item.attr('day')== null)
			{
				model.moveActivity(null,parseFloat(ui.item.attr('position')),null,ui.item.index());
			}
			else
			{
				model.moveActivity(parseFloat(ui.item.attr('day')),parseFloat(ui.item.attr('position')),null,ui.item.index());
			}
			
		}
		},
	}).disableSelection();

}