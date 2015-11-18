if(Meteor.isClient) {
    Meteor.subscribe()
    Template.useradd.events ({
        'submit form': function(event) {
            event.preventDefault();
            var Username = event.target.name.value;
            var Userscore = event.target.score.value;
            var Password = event.target.password.value;

            Meteor.call('insertFloor',Username,Userscore,Password );
        }
    });
}