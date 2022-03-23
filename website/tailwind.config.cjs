module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('pankow-ui'), require('@pankow-ui/color-system')]
};
