<script setup lang="ts">
const props = defineProps<{
	title: string;
	slug: string;
	publishedAt: string;
	description?: string;
}>();
</script>

<template>
	<NuxtLink :to="`/blog/${slug}`" class="flex flex-col gap-2 group">
		<h2
			class="text-neutral-700 group-hover:opacity-70 group-hover:underline transition-opacity duration-300 font-medium text-[20px] leading-[130%] tracking-[-0.5px]"
		>
			{{ title }}
		</h2>
		<p class="text-neutral-600 leading-[130%] tracking-[-0.2px] italic">
			{{
				new Date(publishedAt).toLocaleDateString('en-US', {
					month: 'long',
					day: 'numeric',
					year: 'numeric',
				})
			}}
		</p>
		<p
			v-if="description"
			class="text-neutral-600 text-lg leading-[130%] tracking-[-0.2px] pb-5"
		>
			{{ description }}
		</p>
	</NuxtLink>
</template>
