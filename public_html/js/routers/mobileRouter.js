// Mobile Router
// =============

// Includes file dependencies
define([ "jquery","backbone", "parse", "appinit", "../views/loginView", "../views/eventListView"], 
function( $, Backbone, Parse, AppInit, LoginView, EventListView) {

    // Extends Backbone.Router
    var EventsRouter = Backbone.Router.extend( {
        // The Router constructor
        initialize: function() {
            
            // Tells Backbone to start watching for hashchange events
            Backbone.history.start();
        },
        // Backbone.js Routes
        routes: {
            // When there is no hash bang on the url, the home method is called
            "": "home",    
            "events": "events",
            "login": "login"
            
            // When #category? is on the url, the category method is called
            //"category?:type": "category"
        },
        //Login Method
        login: function(){
            $.mobile.changePage("#login", { reverse: false, changeHash: false });
            new LoginView();
        },
        // Home method
        home: function() {
            //Parse.User.logOut();
            if(!Parse.User.current()){
                //Change Page to Login Page
                $.mobile.changePage( "#login" , { reverse: false, changeHash: false } );
                //Call the LogIn View Template
                new LoginView();
            }else{
                // Programatically changes to the events page
                $.mobile.changePage( "#events" , { reverse: false, changeHash: false } );
                new EventListView();
            }

        },
        events: function(){
            // Programatically changes to the categories page
            $.mobile.changePage( "#events" , { reverse: false, changeHash: false } );
            new EventListView();
        }
 

    } );

    // Returns the Router class
    return EventsRouter;

} );