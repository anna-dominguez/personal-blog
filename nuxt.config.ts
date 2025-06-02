import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },
	vite: {
		plugins: [tailwindcss()],
	},

	css: ['~/assets/css/main.css'],
	modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/eslint'],
	fonts: {
		families: [
			{
				name: 'DM Sans',
				weights: [400, 500, 600, 700, 800, 900],
				provider: 'google',
			},
			{
				name: 'Fira Code',
				weights: [400, 500, 700],
				provider: 'google',
			},
		],
	},
});
