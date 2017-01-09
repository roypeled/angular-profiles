export default function($stateProvider){
	$stateProvider
		.state("list", {
			url: "",
			template: `<users-list></users-list>`
		})
		.state("profile", {
			url: "/profile/:id",
			template: `<user-profile user="$resolve.user"></user-profile>`,
			resolve: {
				user: function(UsersService, $stateParams){
					return UsersService.getUser($stateParams.id)
				}
			}
		})
}