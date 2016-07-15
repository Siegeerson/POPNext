Template.playlist.helpers(
	{
		userShow:function()
		{
			
			return PlayList.find({userId:Meteor.userId()},{sort:{priority:-1}}).fetch()
		}
	}
)