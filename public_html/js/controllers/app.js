$(function(){
    Parse.initialize("3BpgkH2jIyX00MXvL4J5d2ghOi2ezPXbcQI5crY0","RjpVIUiHoUQllehpnIt3Qq6roZrzHJweBuPNOE5L");
    
    // Initialize the Facebook SDK with Parse as described at 
    // https://parse.com/docs/js_guide#fbusers
    window.fbAsyncInit = function() {
      // init the FB JS SDK
      Parse.FacebookUtils.init({
        appId      : '696260057124865', // Facebook App ID
        channelUrl : '', // Channel File
        status     : true, // check login status
        cookie     : true, // enable cookies to allow Parse to access the session
        xfbml      : true  // parse XFBML
      });
    };
    (function(d, debug){
       var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement('script'); js.id = id; js.async = true;
       js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
       ref.parentNode.insertBefore(js, ref);
    }(document, /*debug*/ false));
    
    
//    var AppState = Parse.Object.extend("AppState", {
//       defaults: {} 
//    });
    
   //The main view for the app
//   var AppView = Parse.View.extend({
//      //We bind to the exsisting skeleton of the app
//      initialize: function(){
//          this.render();
//      },
//      render: function(){
//          if(Parse.User.current()){
//              new EventListView();
//          }else{
//              new LoginView();
//          }
//      }
//   });
   
//   var AppRouter = Parse.Router.extend({
//       routes: {
//           
//       },
//       initialize: function(options){
//           
//       },
//   });
//   
//   var state = new AppState;
//   
//   new AppRouter;
//   new AppView;
});