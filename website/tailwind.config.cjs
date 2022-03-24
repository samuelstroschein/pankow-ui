module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	theme: {
		extend: {}
	},
	plugins: [
		require('pankow-ui'),
		require('@pankow-ui/color-system'),
		require('@tailwindcss/typography')
	]
};
