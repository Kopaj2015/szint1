if(Meteor.isClient) {
    console.log("beléptem");
    Template.eventadmin.events ({
        'submit form': function(event) {
            event.preventDefault();
            var Eventname = event.target.name.value;
            var Eventscore = event.target.Date.value;
            var EventResult = event.target.result.value;
            var EventType = event.target.Type.value;

            console.log("updatelek");
            Meteor.call('insertEvent',Eventname,Eventscore,EventResult,EventType );
        }
    });
}