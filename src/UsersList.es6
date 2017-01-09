class UsersController {
	constructor(UsersService){
		UsersService.getAllUsers()
			.then(this.onUsers.bind(this));
	}

	onUsers(users){
		this.users = users;
	}
}

export default {
	controller: UsersController,
	bindings: {
		onSelectedUser: "&"
	},
	template: `
		<p ng-if="!$ctrl.users.length">Loading users...</p>
		<ul>
			<li ng-repeat="user in $ctrl.users" 
			ng-click="$ctrl.onSelectedUser({selected: user})">{{user.name}}</li>
		</ul>
	`
}

