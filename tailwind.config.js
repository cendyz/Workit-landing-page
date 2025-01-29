/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Manrope', 'sans'],
				fraunces: 'Fraunces'
			},
			fontWeight: {
				manrope600: '600',
				manrope800: '800',
			},
			fontSize: {
				base: ['1.6rem'],
			},
			container: {
				center: true,
			},
			colors: {
				green: '#44FFA1',
				purple: {
					900: '#24053E',
					500: '#584D62',
					100: '#FCF8FF',
				},
			},
		},
	},
	plugins: [],
}
