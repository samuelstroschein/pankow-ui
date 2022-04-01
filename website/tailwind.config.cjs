const colors = require('tailwindcss/colors');
const pankowUi = require('pankow-ui');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	theme: {
		extend: {}
	},
	plugins: [
		pankowUi.withConfig({ colorSystem: { semanticColors: { info: colors.blue } } }),
		require('@pankow-ui/color-system/tailwind-plugin'),
		require('@tailwindcss/typography')
	]
};
