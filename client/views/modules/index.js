if (Meteor.isClient){
    Template.homeIndex.helpers({
        events: function () {
            return Events.find({});
        }
    });
}