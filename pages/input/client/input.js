Template.registerHelper('userEmail',
(id)=>{
  const user = Meteor.users.findOne(id);
  if (!user){
    return("no-email")
  }else if(user.emails)
    return user.emails[0].address;
  else {
    return user.services.google.email;
  }
});
Template.input.helpers(
	{
		userShow:function()
		{
			return UserLists.find({}
                      
                      )
		}
	}
)


// this allows the client access to all the user information
// this should be removed when the app is deployed
Meteor.subscribe('userList');


Template.input.events(
	
  
  
{


		"click .js-show-btn": function(event)
		{//   event.preventdefault();
			 console.log(Meteor.userId());
			console.log("clicked the button");
			console.log("clicked button");
			const listChoice(".listselect").val();
			const genre = $(".genre").val();
			const show = $(".show").val();
			const episode = $(".episode").val();
			const link = $(".link").val();
			const list = $(".list").val();
			const item = {listselect:listselectcreatedAt:new Date(),mediaForm:genre, name:show, priority:episode, mediaLink:link, play:list, userId:Meteor.userId()};
			console.dir(item);
			PlayList.insert(item);
			Router.go("playlist");
		},


	}	
);