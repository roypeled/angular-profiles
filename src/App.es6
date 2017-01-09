class AppController {
	selectUser(user){
		this.selectedUser = user;
	}
}

export default {
	controller: AppController,
	template: `
		<users-list on-selected-user="$ctrl.selectUser(selected)"></users-list>
		<user-profile user="$ctrl.selectedUser"></user-profile>
	`
}