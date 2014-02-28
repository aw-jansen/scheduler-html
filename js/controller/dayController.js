var DayController = function(view, model) 
{
	// update the daystart variable

	$(view.dayStart).change(function() 
	{ 
		strDate =  $(this).val();
		arr = strDate.split(':');
		hour = parseInt(arr[0]);
		min = parseInt(arr[1]);
		model.days[$(this).attr('id')].setStart(hour,min);
	}); 

	/******************************
		Drag & Drop Interaction

	******************************/
	view.activityBox.sortable({
		appendTo: document.body,
		helper: "clone",
		items: "li:not(.placeholder)",
		connectWith: "ul",
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
			if(ui.item.attr('day')!= null)
			{
				model.moveActivity(parseFloat(ui.item.attr('day')),parseFloat(ui.item.attr('position')),parseFloat(this.id),ui.item.index());
			}
			else
			{
				model.moveActivity(null,parseFloat(ui.item.attr('position')),parseFloat(this.id),ui.item.index());
			}
		}
		else
		{

		}
		},
    }).disableSelection();
}