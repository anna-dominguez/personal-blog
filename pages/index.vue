<script setup lang="ts">
interface Article {
	title: string;
	slug: string;
	publishedAt: string;
	description: string;
	content: string;
}

const allArticles: Article[] = await $fetch('/api/articles');
allArticles.sort(
	(a, b) =>
		new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);
const articles = allArticles.slice(0, 5);
</script>

<template>
	<main class="flex flex-col gap-12 mx-2 pt-8 px-4 border-x border-neutral-200">
		<section class="flex flex-col gap-6">
			<h1
				class="font-extrabold text-neutral-700 text-[32px] w-fit leading-[60%] tracking-[-0.5px] border-b-10 border-blue-500"
			>
				Hi, I’m Paulina 👋
			</h1>
			<article
				class="flex flex-col gap-4 text-neutral-600 text-lg leading-[130%] tracking-[-0.2px]"
			>
				<p>
					I'm on a journey to become a front-end web developer. I love building
					little projects, trying out new coding techniques, and sharing what I
					learn along the way. When I'm not at my desk, you'll find me reading,
					hiking through the mountains, or challenging myself on rock-climbing
					walls.
				</p>
				<p>
					I started this blog to document my progress, keep myself accountable,
					and hopefully inspire anyone else who's learning to code. Welcome to
					my corner of the internet, and thanks for stopping by!
				</p>
			</article>
			<nav class="flex gap-3 items-center">
				<NuxtLink
					to="/"
					class="bg-neutral-0 rounded-[10px] w-10 h-10 flex items-center justify-center hover:bg-neutral-200 border border-neutral-200 hover:border-neutral-300"
					><NuxtImg src="/images/logo-x.svg" alt="X" class="w-4 h-4"
				/></NuxtLink>
				<NuxtLink
					to="/"
					class="bg-neutral-0 rounded-[10px] w-10 h-10 flex items-center justify-center hover:bg-neutral-200 border border-neutral-200 hover:border-neutral-300"
					><NuxtImg src="/images/logo-github.svg" alt="GitHub" class="w-4 h-4"
				/></NuxtLink>
				<NuxtLink
					to="/"
					class="bg-neutral-0 rounded-[10px] w-10 h-10 flex items-center justify-center hover:bg-neutral-200 border border-neutral-200 hover:border-neutral-300"
					><NuxtImg
						src="/images/logo-linkedin.svg"
						alt="LinkedIn"
						class="w-4 h-4"
				/></NuxtLink>
				<NuxtLink
					to="/"
					class="bg-neutral-0 rounded-[10px] w-10 h-10 flex items-center justify-center hover:bg-neutral-200 border border-neutral-200 hover:border-neutral-300"
					><NuxtImg
						src="/images/logo-frontend-mentor.svg"
						alt="Frontend Mentor"
						class="w-4 h-4"
				/></NuxtLink>
			</nav>
		</section>
		<div class="w-full h-[1px] bg-neutral-200" />
		<section class="flex flex-col gap-8">
			<div class="flex items-baseline gap-3">
				<h2
					class="font-extrabold text-neutral-700 text-[32px] leading-[130%] tracking-[-0.5px]"
				>
					Latest Articles
				</h2>
				<div class="bg-blue-500 w-10 h-1" />
			</div>
			<section class="flex flex-col gap-6">
				<article v-for="article in articles" :key="article.slug">
					<ArticlePreview
						:title="article.title"
						:slug="article.slug"
						:publishedAt="article.publishedAt"
					/>
				</article>
			</section>
			<NuxtLink
				to="/blog"
				class="text-neutral-700 border-b-4 cursor-pointer border-blue-500 w-fit text-lg font-medium leading-[150%] tracking-[-0.5px]"
			>
				View all articles
			</NuxtLink>
		</section>
		<AppFooter />
	</main>
</template>
