const config = {
	content: [
		"./src/**/*.{html,js,svelte,ts}",
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
		"./node_modules/svhighlight/**/*.svelte"
	],

	darkMode: 'class',
	fontFamily: {
		'body': [
			'Inter',
			'ui-sans-serif',
			'system-ui',
			'-apple-system',
			'system-ui',
			'Segoe UI',
			'Roboto',
			'Helvetica Neue',
			'Arial',
			'Noto Sans',
			'sans-serif',
			'Apple Color Emoji',
			'Segoe UI Emoji',
			'Segoe UI Symbol',
			'Noto Color Emoji'
		],
		'sans': [
			'Inter',
			'ui-sans-serif',
			'system-ui',
			'-apple-system',
			'system-ui',
			'Segoe UI',
			'Roboto',
			'Helvetica Neue',
			'Arial',
			'Noto Sans',
			'sans-serif',
			'Apple Color Emoji',
			'Segoe UI Emoji',
			'Segoe UI Symbol',
			'Noto Color Emoji'
		]
	},
	theme: {
		extend: {
			colors: {
				primary: { 50: '#FAF5FF', 100: '#F3E8FF', 200: '#E9D5FF', 300: '#D8B4FE', 400: '#C084FC', 500: '#A855F7', 600: '#9333EA', 700: '#7E22CE', 800: '#6B21A8', 900: '#581C87' },
			}
		}
	}
};

module.exports = config;