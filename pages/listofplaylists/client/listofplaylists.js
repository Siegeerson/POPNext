
Template.listofplaylists.helpers(
 {
   UserLists: function() {
   return UserLists.find();
 }
}
)
Template.listofplaylists.events(
	{
		"click .js-list-btn":function(event)
			{
				console.log("button clicked");
				const listname= $(".listname").val();
				const item = {playlistName:listname}
				console.dir(item);
				UserLists.insert(item);

		},
	}

);
Template.listofplaylists.events
(
	{ 
    	"click .dlt-item":function(events)
    	{
    		const id = $ (".id").val();
		UserLists.remove(id)

		
		}
	}	
)