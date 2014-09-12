define(["jquery", "parse", "models/EventsModel"], function($, Parse, EventsModel){
    var EventsCollection = Parse.Collection.extend({
        model: EventsModel,
        
    });
    
    return EventsCollection;
});