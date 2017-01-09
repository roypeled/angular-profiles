import angular from "angular";
import UsersList from "./UsersList.es6";
import UsersService from "./UsersService.es6";
import UserProfile from "./UserProfile.es6";
import App from "./App.es6";

angular.module("app", [])
	.service("UsersService", UsersService)
	.component("app", App)
	.component("userProfile", UserProfile)
	.component("usersList", UsersList);