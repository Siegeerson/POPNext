Template.playlist.helpers(
	{
		userShow:function()
		{
			console.log($("#hiddenName").val())
			console.log(PlayList.find({userId:Meteor.userId(),listselect:$("#hiddenName").val()}).fetch())
			return PlayList.find({userId:Meteor.userId(),listselect:$("#hiddenName").val()}, {sort:{priority:1}}                      
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
					if (object[i].listselect == output[j]) {nameCounter++;}
					
				}
				if (nameCounter ==0) {output[outputLength]={names:object[i].listselect}}

			}
		//console.log(output);
		return (output);
		}





	}
)

Template.playlist.events(
	{ 
    "click .js-clear":function(events){

      Meteor.call("clearShows");
    },
  
  })