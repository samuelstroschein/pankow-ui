const colors = require('tailwindcss/colors');
const pankowUi = require('@pankow-ui/pankow-ui');

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	theme: {
		extend: {}
	},
	plugins: [
		pankowUi.withConfig({ colorSystem: { semanticColors: { info: colors.blue } } }),
		require('@tailwindcss/typography')
	]
};
