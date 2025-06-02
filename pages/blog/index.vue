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
</script>

<template>
	<main class="flex flex-col gap-4 mx-2 pt-8 px-4 border-x border-neutral-200">
		<section class="flex flex-col gap-1.5">
			<div class="flex items-baseline gap-3">
				<h2
					class="font-extrabold text-neutral-700 text-[32px] leading-[130%] tracking-[-0.5px]"
				>
					My Articles
				</h2>
				<div class="bg-blue-500 w-10 h-1" />
			</div>
			<p class="text-neutral-600 text-lg leading-[150%] tracking-[-0.2px]">
				Below are all my recent blog posts. Click on any title to read the full
				article.
			</p>
		</section>
		<section
			class="flex flex-col gap-5 divide-y divide-neutral-200 border-t border-neutral-200 pt-5"
		>
			<ArticlePreview
				v-for="article in allArticles"
				:key="article.slug"
				:title="article.title"
				:slug="article.slug"
				:publishedAt="article.publishedAt"
				:description="article.description"
			/>
		</section>
		<AppFooter />
	</main>
</template>
