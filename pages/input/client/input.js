

Template.input.events(
	
  
  
{


		"click .js-show-btn": function(event)
		{//   event.preventdefault();
			console.log("clicked the button");
			console.log("clicked button");
			const genre = $(".genre").val();
			const show = $(".show").val();
			const episode = $(".episode").val();
			const link = $(".link").val();
			const item = {createdAt:new Date(),mediaForm:genre, name:show, priority:episode, mediaLink:link};
			console.dir(item);
			PlayList.insert(item);
		},
	}	
)
