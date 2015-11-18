if (Events.find().count() == 0) {
	Events.insert({
		name: 'Intro',
		time: new Date(),
		winner: '1',
		type: 'test-sport1'
	});
	
	Events.insert({
		name: 'Intro1',
		time: new Date(),
		winner: '2',
		type: 'test-sport'
	});
	
	Events.insert({
		name: 'Intro2',
		time: new Date(),
		winner: '1',
		type: 'test-sport4'
	});

}
	
if (Floors.find().count() == 0) {
	Floors.insert({
		name: 'firsrfloor',
		score: 100
	});
	
	Floors.insert({
		name: 'scondfloor',
		score: 10
	});
	
}

if (Meteor.users.find().count() == 0) {
	var users=[
   {username: "admin", roles:['admin']}
	];
	_.each(users, function(user){
    Accounts.createUser({
        password: "admin",
		username: user.username,
        roles: user.roles
    });
});
}
