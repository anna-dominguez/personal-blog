<template>
	<footer
		class="border-t border-neutral-200 w-full py-4 flex justify-between items-center"
	>
		<p class="text-neutral-600 leading-[130%] tracking-[-0.2px]">
			Made with ❤️ and ☕️
		</p>
		<nav class="flex gap-4">
			<NuxtLink to="/">
				<NuxtImg src="/images/logo-x.svg" alt="X" class="w-4 h-4" />
			</NuxtLink>
			<NuxtLink to="/">
				<NuxtImg src="/images/logo-github.svg" alt="GitHub" class="w-4 h-4" />
			</NuxtLink>
			<NuxtLink to="/">
				<NuxtImg
					src="/images/logo-linkedin.svg"
					alt="LinkedIn"
					class="w-4 h-4"
				/>
			</NuxtLink>
			<NuxtLink to="/">
				<NuxtImg
					src="/images/logo-frontend-mentor.svg"
					alt="Frontend Mentor"
					class="w-4 h-4"
				/>
			</NuxtLink>
		</nav>
	</footer>
</template>
