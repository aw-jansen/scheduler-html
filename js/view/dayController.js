var DayController = function(view, model) 
{
	/******************************
		Drag & Drop Interaction

	******************************/
	view.activityBox.sortable({
      items: "li:not(.placeholder)",
      connectWith: "ul",
      sort: function() 
      {
        $( this ).removeClass( "ui-state-default" );
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