/**
 * Meteor server - publish's methods and Meteor's methods
 */
Meteor.methods({
	'insertFloor': function(floorName, floorScore, password) {
		Floors.insert({
			name: floorName,
			score: parseInt(floorScore)
		});
		
		Accounts.createUser({
			username: floorName,
			password: password,
		});
	},
		
	'removeFloor': function(selectedFloor) {
		Floors.remove(selectedFloor);
	},
	
	'modifyFloor': function(selectedFloor, modifiedScore, modfiedPassword) {
		Floors.update(selectedFloor, {$set: {score : parseInt(modifiedScore), password: modfiedPassword}});
	}

});