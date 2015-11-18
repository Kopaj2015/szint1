if(Meteor.isClient) {
    Meteor.subscribe()
    console.log("user added");
    Template.useradd.events ({
        'submit form': function(event) {
            event.preventDefault();
            var Username = event.target.name.value;
            console.log(Username);
            var Userscore = event.target.score.value;
            console.log(Userscore);
            var Password = event.target.password.value;
            console.log(Password);
            console.log("user added");

            Meteor.call('insertFloor',Username,Userscore,Password );

        }
    });
}