define(["jquery", "parse"], function(){
   var LoginView = Parse.View.extend({
     events: {
         "click #facebook-btn": "logIn",
     },
     el: ".login",
     initialize: function(){
         _.bindAll(this, "logIn");
         this.render();
     },
     logIn: function(e){
          var self = this;

      $(".fb_content").hide();
      $(".facebook_button")
        .addClass("disabled")
        .empty();

      if (Parse.User.current()) {
        //Go to events they are already logged in
      } else {
        Parse.FacebookUtils.logIn(null, {
          success: function(user) {
            // If it's a new user, let's fetch their name from FB
            if (!user.existed()) {
              // We make a graph request
              FB.api('/me', function(response) {
                if (!response.error) {
                  // We save the data on the Parse user
                  user.set("displayName", response.name);
                  user.save(null, {
                    success: function(user) {
                      //Go to events list view
                    },
                    error: function(user, error) {
                      console.log("Oops, something went wrong saving your name.");
                    }
                  });
                } else {
                  console.log("Oops something went wrong with facebook.");
                }
              });
            // If it's an existing user that was logged in, we save the score
            } else {
              //go to events list view
            }
          },
          error: function(user, error) {
            console.log("Oops, something went wrong. user="+user+" Error = "+error);
          }
        });
      }
    },
     render: function(){
         this.$el.html(_.template($("#facebook-login").html())).trigger("create");
         return this;
     }
   });
   
   return LoginView;

});
