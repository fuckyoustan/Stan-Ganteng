/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['media'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			screens: {
				sm: "100%",
				md: "100%",
				lg: "520px",
				xl: "620px"
			},
			padding: '2rem',
		},
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
			colors: {
				// Light mode colors (Pink-focused)
				'light-theme': '#FDF8F9', // Background yang lebih lembut senada pink
				'primary-light': '#F06292', // Warna pink dari logo.svg
				'primary-hover-light': '#F48FB1', // Pink yang lebih terang untuk hover

				// Dark mode colors (Pink-focused)
				'dark-theme': '#0C151D', // Background gelap dengan tint pink/maroon MD3
				'primary-dark': '#F48FB1', // Pink terang untuk aksesibilitas di mode gelap
				'primary-hover-dark': '#F06292', // Pink logo untuk hover di mode gelap

				// Neutrals (Tetap pertahankan atau sesuaikan sedikit ke arah cold-grey)
				'n200': '#d7d9da',
				'n900': '#222222',
				'n700': '#171F26',
				'n500': '#555555',
			},
    	}
    },
	plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
}
