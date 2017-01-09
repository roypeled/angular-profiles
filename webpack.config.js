var HTML = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/index.es6"
	},

	output: {
		path: "./dist",
		filename: "app.js"
	},

	module: {
		loaders: [
			{ loader: "babel", test: /.(.es6$)/, query: {presets: ["es2015"]}},
			{ loaders: ["css", "style", "sass"], test: /.scss$/}
		]
	},

	plugins: [
		new HTML({
			template: './src/index.html'
		})
	],

	devtool: "source-maps"
};
