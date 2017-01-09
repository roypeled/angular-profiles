export default function($stateProvider){
	$stateProvider
		.state("list", {
			url: "",
			template: `<users-list></users-list>`
		})
		.state("profile", {
			url: "/profile/:id",
			template: `
<a ui-sref="list"><- Back</a>
<user-profile user="$resolve.user"></user-profile>
<a ui-sref="profile.photos">Photos</a>
<a ui-sref="profile.notes">Notes</a>
<div ui-view></div>
`,
			resolve: {
				user: function(UsersService, $stateParams){
					return UsersService.getUser($stateParams.id)
				}
			}
		})
		.state("profile.photos", {
			url: "/photos",
			template: `Here are the user's photos`
		})
		.state("profile.notes", {
			url: "/notes",
			template: `Here are the user's notes: notes notes notes notes`
		})
}