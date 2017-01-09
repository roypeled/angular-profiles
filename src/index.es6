import angular from "angular";
import uiRouter from "angular-ui-router";
import UsersList from "./UsersList.es6";
import UsersService from "./UsersService.es6";
import UserProfile from "./UserProfile.es6";
import routes from "./routes.es6"

angular.module("app", [uiRouter])
	.config(routes)
	.service("UsersService", UsersService)
	.component("userProfile", UserProfile)
	.component("usersList", UsersList);