import { defineConfig } from "eslint/config"; // eslint-disable-line n/no-unpublished-import
import rg from "eslint-config-reverentgeek"; // eslint-disable-line n/no-unpublished-import

export default defineConfig( {
	extends: [ rg.configs["node-esm"] ],
	rules: {
	}
} );
