import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./source/**/*.{html,js,svelte,ts}'],
	plugins: [forms, typography, daisyui],
	daisyui: {
		themes: ['dracula'],
	},
};
