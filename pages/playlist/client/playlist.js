Template.playlist.helpers(
	{
		userShow:function()
		{
			return PlayList.find({},{sort:{priority:-1}}
                      
                      )
		}
	}
)