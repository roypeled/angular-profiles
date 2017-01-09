class UsersController {
	constructor(UsersService, $state){
		this.$state = $state;

		UsersService.getAllUsers()
			.then(this.onUsers.bind(this));
	}

	onUsers(users){
		this.users = users;
	}

	selectUser(user){
		this.$state.go("profile", {id: user.id});
	}
}

export default {
	controller: UsersController,
	template: `
		<p ng-if="!$ctrl.users.length">Loading users...</p>
		<ul>
			<li ng-repeat="user in $ctrl.users" 
			ng-click="$ctrl.selectUser(user)">{{user.name}}</li>
		</ul>
	`
}


