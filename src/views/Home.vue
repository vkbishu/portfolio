<script>
import AppBanner from '@/components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid.vue';

export default {
	name: 'Home',
	components: {
		AppBanner,
		ProjectsGrid,
	},
	data(){
		return {
			skills: {
				// https://github.com/tandpfun/skill-icons#readme
				icons: ['vue', 'nuxtjs', 'jquery', 'js', 'ts', 'sass', 'css', 'bootstrap', 'tailwind', 'html'],
				icons_backend: ['nodejs', 'express', 'mysql', 'mongodb', 'firebase', 'sqlite', 'php', 'laravel'],
				icons_others: ['vscode', 'git', 'github', 'netlify', 'heroku', 'atom']
			}
		}
	}
};
</script>

<template>
	<div class="container mx-auto">
		<!-- Banner -->
		<AppBanner class="mb-5 sm:mb-8" />

		<!-- skills -->
		<section class="py-20 flex flex-col sm:flex-row sm:gap-10 items-center">
			<div class=" mb-5 grow">
				<p class="uppercase mb-2 font-general-semibold dark:text-primary-light">Frontend</p>
				<img :src="`https://skillicons.dev/icons?perline=5&i=${skills.icons.join(',')}`" alt="">
			</div>
			<div class=" mb-5 grow">
				<p class="uppercase mb-2 font-general-semibold dark:text-primary-light mb-5">Backend</p>
				<img :src="`https://skillicons.dev/icons?perline=5&i=${skills.icons_backend.join(',')}`" alt="">
			</div>
			<div class=" mb-5 grow">
				<p class="uppercase mb-2 font-general-semibold dark:text-primary-light mb-5">Others</p>
				<img :src="`https://skillicons.dev/icons?perline=5&i=${skills.icons_others.join(',')}`" alt="">
			</div>
		</section>

		<!-- Projects -->
		<ProjectsGrid />

	</div>
</template>

<style scoped></style>
