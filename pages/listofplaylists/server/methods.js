Meteor.methods({

	"clearPlaylists":function(){
		UserLists.remove({});
	}
})