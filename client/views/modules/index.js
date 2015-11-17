if (Meteor.isClient) {
    Template.homeIndex.helpers({
        'Events': function () {
            return Events.find({});
        }
            });
}