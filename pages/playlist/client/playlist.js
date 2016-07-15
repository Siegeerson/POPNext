Template.playlist.helpers(
	{
		userShow:function()
		{
			return PlayList.find({},{sort:{priority:1}}
                      
                      )
		}
	}
)

Template.playlist.events(
	{ 
    "click .js-clear":function(events){

      Meteor.call("clearShows");
    },
  
  })