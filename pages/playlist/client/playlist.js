Template.playlist.helpers
(
	{
		userShow:function()
		{		


			
			return PlayList.find({userId:Meteor.userId(),listselect:this.names}, {sort:{priority:1}}                      
                      ).fetch()
		},
		name:function()
		{var object = PlayList.find({userId:Meteor.userId()}).fetch()
			var output = []
			
			for (var i = 0; i < object.length ; i++)
			{
				var outputLength= output.length;
				var nameCounter = 0
				for (var j = 0; j < outputLength ;  j++) 
				{
				
					console.log(outputLength)
					
					if (object[i].listselect == output[j]) {nameCounter++;}

					
				
					}
					if (nameCounter ==0) 
					{
						output[outputLength]=object[i].listselect
					

					}
				
			}
				var returning = [];
				for (var k = 0;k<output.length;k++) {
					returning[k] = ({names:output[k]});
				}
				
				
			return returning;


		}
	}
)

Template.playlist.events(
	{ 
    "click .js-clear":function(events){

      Meteor.call("clearShows");
    },
  
  })