<script setup lang="ts">
import { useForm, useField } from 'vee-validate';
import { z } from 'zod';
import { toTypedSchema } from '@vee-validate/zod';

const schema = toTypedSchema(
	z.object({
		email: z.string().email('Invalid email address'),
	})
);

const { handleSubmit } = useForm({ validationSchema: schema });
const { value: email, errorMessage } = useField('email');

const onSubmit = handleSubmit((values: { email: string }) => {
	console.log('Email :', values.email);
});
</script>

<template>
	<main
		class="flex flex-col min-h-[calc(100vh-120px)] gap-4 mx-2 pt-8 px-4 border-x border-neutral-200"
	>
		<section class="flex-1 flex flex-col gap-4">
			<h1
				class="font-extrabold text-neutral-700 text-[32px] w-fit leading-[60%] tracking-[-0.5px]"
			>
				Newsletter
			</h1>
			<p class="text-neutral-600 text-lg">
				Want to stay updated on my latest articles, coding tutorials, and
				personal adventures? Sign up for my newsletter! It’s a simple way to
				keep track of new posts and occasional coding tips I discover. Just drop
				your email in the sign-up box, and I’ll send you updates whenever
				there’s something new to share.
			</p>
			<p class="text-neutral-700 text-base font-bold tracking-[-0.6px]">
				I’d love to have you along for the ride and also hear about your own
				journey!
			</p>
			<form class="flex flex-col gap-4 mt-2" @submit.prevent="onSubmit">
				<div class="flex flex-col gap-2">
					<label
						for="email"
						class="text-neutral-600 text-lg tracking-[-0.2px] leading-[140%]"
						>Email Address</label
					>
					<input
						type="email"
						id="email"
						v-model="email"
						class="border border-neutral-200 rounded-[10px] p-3 text-neutral-600 bg-neutral-0"
						placeholder="email@example.com"
					/>
					<p v-if="errorMessage" class="text-red-500 text-sm">
						{{ errorMessage }}
					</p>
				</div>
				<button
					type="submit"
					class="bg-blue-500 text-neutral-900 rounded-[10px] px-6 py-3 text-lg font-medium tracking-[-0.5px] leading-[150%] w-fit cursor-pointer"
				>
					Stay updated
				</button>
			</form>
			<p class="text-neutral-600 text-base font-medium tracking-[-0.2px]">
				Unsubscribe anytime. No spam, I promise 🙂
			</p>
		</section>

		<AppFooter />
	</main>
</template>
