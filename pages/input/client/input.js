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

// this allows the client access to all the user information
// this should be removed when the app is deployed
Meteor.subscribe('userList');


Template.input.events(
	
  
  
{


		"click .js-show-btn": function(event)
		{//   event.preventdefault();
			console.log("clicked the button");
			console.log("clicked button");
			const genre = $(".genre").val();
			const show = $(".show").val();
			const episode = $(".episode").val();
			const item = {createdAt:new Date(),mediaForm:genre, name:show, priority:episode, };
			console.dir(item);
			PlayList.insert(item);
		},
	}	
)

