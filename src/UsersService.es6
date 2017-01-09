
const root = "https://jsonplaceholder.typicode.com/";

export default class UsersService {

	constructor($http){
		this.$http = $http;
	}

	getAllUsers(){
		return this.$http.get(root + "users")
			.then((response) => response.data);
	}

	getUser(id) {
		return this.$http.get(root + "users/" + id)
			.then((response) => response.data);
	}
}
