Template.admin.isAdmin = function () {
    var currentUser = Meteor.user();
	
    if (null !== currentUser) {
        if ('admin' === currentUser.username) {
            return true;
        }
    }
};