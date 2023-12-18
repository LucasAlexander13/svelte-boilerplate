import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	source: 'source',
	extensions: ['.svelte'],
	preprocess: [vitePreprocess()],
	compilerOptions: {
		customElement: true,
	},
	vitePlugin: {
		inspector: true,
	},
	kit: {
		adapter: adapter({
			out: 'build',
			precompress: false,
			polyfill: true,
		}),
		env: {
			dir: '.',
			publicPrefix: 'PUBLIC_',
			privatePrefix: 'PRIVATE_',
		},
		files: {
			assets: 'public',
			hooks: {
				client: 'source/hooks.client',
				server: 'source/hooks.server',
			},
			lib: 'source/lib',
			routes: 'source/routes',
			params: 'source/params',
			serviceWorker: 'source/workers',
			appTemplate: 'source/app.html',
			errorTemplate: 'source/error.html',
		},
		alias: {
			'@app.postcss': './source/app.postcss',
			'@static/i18n': './source/static/i18n/_index.ts',
			'@static/assets': './source/static/assets/_index.ts',
			'@static/flags': './source/static/flags/_index.ts',
			'@static/images': './source/static/images/_index.ts',
			'@static/icons': './source/static/icons/_index.ts',
			'@static/scripts': './source/static/scripts/_index.ts',
			'@static/vectors': './source/static/vectors/_index.ts',
			'@core/components': './source/core/components/_index.ts',
			'@core/interfaces': './source/core/interfaces/_index.ts',
			'@core/layout': './source/core/layout/_index.ts',
			'@core/stores': './source/core/stores/_index.ts',
			'@pages': './source/pages/_index.ts',
			'@routes': './source/routes/_index.ts',
			'@server/apis': './source/server/apis/_index.ts',
			'@server/models': './source/server/models/_index.ts',
			'@server/services': './source/server/services/_index.ts',
		},
	},
};
export default config;
