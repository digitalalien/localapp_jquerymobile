define(["jquery", "parse", "underscore", "collections/EventsCollection", "models/EventsModel"], function($, Parse, _, EventsCollection, EventsModel){
   var EventListView = Parse.View.extend({
       el: "events-container",
       
       initialize: function(){
           var self = this;
           
           _.bindAll(this, 'addOne', 'addAll');
           
           //Event list template
           this.$el.html(_.template($("#events-template").html()));
           
           //Create collection of Events
           this.events = new EventsCollection();
           
           //Get Events
           this.events.query = new Parse.Query(EventsModel);
           this.events.fetch();
           
       },
       render: function(){
           
       },
       addOne: function(event){
           var view = new EventListItemView({model: event});
           this.$("#events-list").append(view.render().el);
       },
       addAll: function(collection, filter){
           this.$("events-list").html("");
           this.events.each(this.addOne);
       }
       
       
   });
   return EventListView;
});