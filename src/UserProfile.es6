export default {
	bindings: {
		user: "<"
	},
	template: `
		<div>
			<dl>
				<dt>ID</dt>
				<dd>{{ $ctrl.user.id }}</dd>
	
				<dt>Name</dt>
				<dd>{{ $ctrl.user.name }}</dd>
	
				<dt>Email</dt>
				<dd>{{ $ctrl.user.email }}</dd>
	
				<dt>Phone</dt>
				<dd>{{ $ctrl.user.phone }}</dd>
				
				<dt>Birthday</dt>
				<dd>{{ $ctrl.user.birthday | date:'d/M/yy' }}</dd>
			</dl>
		</div>
	`
}

