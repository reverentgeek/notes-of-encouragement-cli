import rg from "eslint-config-reverentgeek";

export default [
	...rg.configs[ "node-esm" ],
	{
		rules: {
			"n/no-unpublished-import": [ "error", {
				allowModules: [ "eslint-config-reverentgeek" ]
			} ]
		}
	}
];