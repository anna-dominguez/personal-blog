<script setup lang="ts">
interface Article {
	title: string;
	slug: string;
	publishedAt: string;
	description: string;
	content: string;
}

const route = useRoute();
const slug = route.params.slug as string;

const articles: Article[] = await $fetch('/api/articles');
const article = articles.find((article) => article.slug === slug);

if (!article) {
	throw createError({
		status: 404,
		message: 'Article not found',
	});
}

// Séparateurs
article.content = article.content.replace(
	/^---$/gm,
	'<hr class="border-neutral-200 my-6" />'
);

// Titres
article.content = article.content.replace(
	/^## (.*$)/gm,
	'<h2 class="text-2xl font-bold text-neutral-700 mt-8 mb-4">$1</h2>'
);
article.content = article.content.replace(
	/^### (.*$)/gm,
	'<h3 class="text-xl font-bold text-neutral-700 mt-6 mb-3">$1</h3>'
);

// Gras et italique
article.content = article.content.replace(
	/\*\*(.*?)\*\*/g,
	'<strong class="font-bold">$1</strong>'
);
article.content = article.content.replace(
	/\*(.*?)\*/g,
	'<em class="italic">$1</em>'
);

// Code inline
article.content = article.content.replace(
	/`(.*?)`/g,
	'<code class="font-mono bg-neutral-100 px-1 py-0.5 rounded text-sm">$1</code>'
);

// Blockquotes
article.content = article.content.replace(
	/^> (.*$)/gm,
	'<blockquote class="border-l-4 border-blue-500 pl-4 my-4 italic text-neutral-600">$1</blockquote>'
);

// Listes à puces
article.content = article.content.replace(
	/^- (.*$)/gm,
	'<li class="ml-4 list-disc">$1</li>'
);

// Listes numérotées
article.content = article.content.replace(
	/^\d+\. (.*$)/gm,
	'<li class="ml-4 list-decimal">$1</li>'
);

// Encapsuler les listes dans des balises ul/ol
article.content = article.content.replace(
	/(<li class="ml-4 list-disc">.*?<\/li>(?:\n<li class="ml-4 list-disc">.*?<\/li>)*)/gs,
	'<ul class="my-4">$1</ul>'
);
article.content = article.content.replace(
	/(<li class="ml-4 list-decimal">.*?<\/li>(?:\n<li class="ml-4 list-decimal">.*?<\/li>)*)/gs,
	'<ol class="my-4">$1</ol>'
);

// Blocs de code avec langage
article.content = article.content.replace(
	/```(\w+)?\n([\s\S]*?)```/g,
	(match, lang, code) => {
		const language = lang || 'text';
		// Préserver les espaces et indentations
		const formattedCode = code
			.split('\n')
			.map((line: string) =>
				line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
			)
			.join('\n')
			.trim();
		return `<div class="my-6"><div class="bg-neutral-200 px-3 py-1 text-xs font-mono text-neutral-600 rounded-t-lg border border-b-0 border-neutral-300">${language}</div><pre class="bg-neutral-50 p-4 rounded-b-lg overflow-x-auto border border-neutral-300 border-t-0 whitespace-pre"><code class="font-mono text-sm text-neutral-800 leading-relaxed">${formattedCode}</code></pre></div>`;
	}
);

// Tableaux Markdown
article.content = article.content.replace(
	/\|(.*)\|\n\|(.*)\|\n((\|.*\|\n?)*)/g,
	(match, header, separator, rows) => {
		// Traiter l'en-tête
		const headerCells = header
			.split('|')
			.map((cell: string) => cell.trim())
			.filter((cell: string) => cell !== '')
			.map(
				(cell: string) =>
					`<th class="px-4 py-2 text-left font-medium text-neutral-700 border-b border-neutral-200">${cell}</th>`
			)
			.join('');

		// Traiter les lignes
		const tableRows = rows
			.trim()
			.split('\n')
			.map((row: string) => {
				const cells = row
					.split('|')
					.map((cell: string) => cell.trim())
					.filter((cell: string) => cell !== '')
					.map(
						(cell: string) =>
							`<td class="px-4 py-2 border-b border-neutral-100">${cell}</td>`
					)
					.join('');
				return `<tr>${cells}</tr>`;
			})
			.join('');

		return `<div class="my-6 overflow-x-auto"><table class="w-full border-collapse rounded-lg border border-neutral-200"><thead><tr>${headerCells}</tr></thead><tbody>${tableRows}</tbody></table></div>`;
	}
);

// Paragraphes
article.content = article.content.replace(/\n\n/g, '</p><p class="mb-4">');
article.content = `<p class="mb-4">${article.content}</p>`;

// Nettoyer les paragraphes vides
article.content = article.content.replace(/<p class="mb-4"><\/p>/g, '');
</script>

<template>
	<main class="flex flex-col gap-4 mx-2 pt-8 px-4 border-x border-neutral-200">
		<section class="flex flex-col gap-1.5">
			<div class="flex items-baseline gap-3">
				<h2
					class="font-extrabold text-neutral-700 text-[32px] leading-[130%] tracking-[-0.5px]"
				>
					{{ article.title }}
				</h2>
			</div>
			<p class="text-neutral-600 italic leading-[150%] tracking-[-0.2px]">
				Published
				{{
					new Date(article.publishedAt).toLocaleDateString('en-US', {
						month: 'long',
						day: 'numeric',
						year: 'numeric',
					})
				}}
			</p>
		</section>
		<section
			class="flex flex-col gap-5 divide-y divide-neutral-200 border-t border-neutral-200 pt-5"
		>
			<article>
				<div v-html="article.content" />
			</article>
		</section>
		<AppFooter />
	</main>
</template>
