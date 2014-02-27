var ParkedActivityListController = function (view,model) {

	view.sortable({
		appendTo: document.body,
		helper: "clone",
		items: "li:not(.placeholder)",
		connectWith: "ul",
		cancel: ".activityCloseBox",
		sort: function() 
		{
			$( this ).removeClass( "ui-state-default" );
		},
		start: function()
		{
			$(this).find('.activityCloseBox').css('opacity','0');
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