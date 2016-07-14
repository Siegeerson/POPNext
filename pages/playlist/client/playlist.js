Template.playlist.helpers(
	{
		playList:function()
		{
			return PlayList.find({},
                      {
                        sort: {priority: -1}})
		}
	}
)