Router.configure({
	// this is the name of your layout template
	layoutTemplate: 'layout2',
});

// here is how you specify the home page template
Router.route('/', {name: 'home'});

// add more templates here if you want them to be reachable
Router.route('about');
Router.route('ourteam');
Router.route('playlist');
Router.route('input');
Router.route('input/:id',
  {name:"inputedit",
   template:"inputedit",
   data: function(){
      const c = PlayList.findOne(this.params.id);
       console.log("getting the PlayList "+this.params.id);
      console.dir(c);
      return c;
    }
  }
);

Router.route('listofplaylists')
/*
// here is how to create a link to just one document
// in your collection
Router.route('pokemonData/:_id',
{name:"pokemonData",
 data: function(){
	 const c = Pokedex.findOne(this.params._id);
	 return c;
 }});
 */
