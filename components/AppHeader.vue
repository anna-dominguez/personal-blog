<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isMenuOpen = ref(false);

const isActive = (path) => {
	return route.path === path;
};

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
	<header
		class="bg-neutral-0 w-full flex p-1.5 items-center rounded-[10px] border border-neutral-200 justify-between"
	>
		<NuxtImg
			src="/images/image-avatar.jpg"
			alt="profile picture"
			class="w-10 h-10"
		/>
		<section class="flex gap-1.5 sm:gap-6 items-center">
			<nav
				class="hidden sm:flex gap-6 leading-[100%] text-neutral-700 tracking-[-0.5px]"
			>
				<NuxtLink
					to="/"
					class="hover:border-b-4 hover:border-blue-500"
					:class="isActive('/') ? 'border-b-4 border-blue-500' : ''"
					>Home</NuxtLink
				>
				<NuxtLink
					to="/blog"
					class="hover:border-b-4 hover:border-blue-500"
					:class="isActive('/blog') ? 'border-b-4 border-blue-500' : ''"
					>Blog</NuxtLink
				>
				<NuxtLink
					to="/about"
					class="hover:border-b-4 hover:border-blue-500"
					:class="isActive('/about') ? 'border-b-4 border-blue-500' : ''"
					>About</NuxtLink
				>
				<NuxtLink
					to="/newsletter"
					class="hover:border-b-4 hover:border-blue-500"
					:class="isActive('/newsletter') ? 'border-b-4 border-blue-500' : ''"
					>Newsletter</NuxtLink
				>
			</nav>
			<button
				class="w-10 h-10 flex items-center justify-center sm:hidden cursor-pointer rounded-lg"
				:class="isMenuOpen ? 'bg-neutral-700' : ''"
				@click="toggleMenu"
			>
				<NuxtImg
					v-if="!isMenuOpen"
					src="/images/icon-menu.svg"
					alt="menu"
					class="w-5 h-5"
				/>
				<NuxtImg
					v-else
					src="/images/icon-menu-close.svg"
					alt="menu"
					class="w-5 h-5"
				/>
			</button>
			<button
				class="w-10 h-10 flex items-center justify-center bg-neutral-100 border border-neutral-200 rounded-lg cursor-pointer"
			>
				<NuxtImg src="/images/icon-moon.svg" alt="moon" class="w-5 h-5" />
			</button>
		</section>
	</header>
	<div
		v-if="isMenuOpen"
		class="mt-4 bg-neutral-0 w-full flex flex-col p-3 gap-1.5 sm:hidden border border-neutral-200 rounded-[10px] shadow-md"
	>
		<NuxtLink
			to="/"
			class="text-lg leading-[150%] tracking-[-0.5px]"
			:class="
				isActive('/')
					? 'font-medium text-neutral-900'
					: 'text-neutral-600 font-regular'
			"
			>Home</NuxtLink
		>
		<div class="w-full h-[1px] bg-neutral-200" />
		<NuxtLink
			to="/blog"
			class="text-lg leading-[150%] tracking-[-0.5px]"
			:class="
				isActive('/blog')
					? 'font-medium text-neutral-900'
					: 'text-neutral-600 font-regular'
			"
			>Blog</NuxtLink
		>
		<div class="w-full h-[1px] bg-neutral-200" />
		<NuxtLink
			to="/about"
			class="text-lg leading-[150%] tracking-[-0.5px]"
			:class="
				isActive('/about')
					? 'font-medium text-neutral-900'
					: 'text-neutral-600 font-regular'
			"
			>About</NuxtLink
		>
		<div class="w-full h-[1px] bg-neutral-200" />
		<NuxtLink
			to="/newsletter"
			class="text-lg leading-[150%] tracking-[-0.5px]"
			:class="
				isActive('/newsletter')
					? 'font-medium text-neutral-900'
					: 'text-neutral-600 font-regular'
			"
			>Newsletter</NuxtLink
		>
	</div>
</template>
