<script>
import AppBanner from '@/components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid.vue';
import Button from '../components/reusable/Button.vue';

export default {
	name: 'Home',
	components: {
		AppBanner,
		ProjectsGrid,
		Button,
	},
	data(){
		return {
			skills: {
				frontend: ['VueJS', 'Vuex', 'NuxtJS', 'jQuery', 'Javascript', 'SCSS', 'CSS3', 'HTML5'],
				backend: ['NodeJS', 'ExpressJS', 'SequelizeJS', 'MySQL', 'MARIADB', 'MongoDB']
			}
		}
	}
};
</script>

<template>
	<div class="container mx-auto">
		<!-- Banner -->
		<AppBanner class="mb-5 sm:mb-8" />

		<!-- About me -->
		<section class="py-20 flex flex-col sm:flex-row sm:gap-10 items-center">
			<div class="">
				<div class="mb-6">
					<p class="uppercase mb-2 font-general-semibold dark:text-primary-light">Frontend</p>
					<ul class="flex flex-row flex-wrap gap-2 justify-center sm:justify-start">
						<li v-for="item in skills.frontend" :key="item"  class="bg-red-500 text-white px-4 py-2 rounded-full shadow-md">
							{{item}}
						</li>
					</ul>
				</div>

				<div class="mb-4">
					<p class="uppercase mb-2 font-general-semibold dark:text-primary-light">Backend</p>
					<ul class="flex flex-row flex-wrap gap-2">
						<li v-for="item in skills.backend" :key="item" class="bg-indigo-500 text-white px-4 py-2 rounded-full shadow-md">
							{{item}}
						</li>
					</ul>
				</div>
			</div>
			<div class="grow">
				<h2 class="'font-general-semibold text-2xl sm:text-3xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light text-right">SKILL SET</h2>
			</div>
		</section>

		<!-- more about me -->
		<!-- <section class="py-20">
			<h2 class="'font-general-semibold text-2xl sm:text-3xl font-semibold mb-6 text-ternary-dark dark:text-ternary-light text-center">MORE ABOUT ME</h2>
			<div class="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 sm:space-y-0">
				<div class="cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark p-6 rounded-md shadow-md hover:shadow-xl space-y-2">
					<h2 class="text-lg uppercase font-bold text-ternary-dark dark:text-ternary-light ">A wireframe designer</h2>
					<div class="text-gray-400">
						I can design wireframe for application.
					</div>
				</div>
				<div class="cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark p-6 rounded-md shadow-md hover:shadow-xl space-y-2">
					<h2 class="text-lg uppercase font-bold text-ternary-dark dark:text-ternary-light ">A tech explorer</h2>
					<div class="text-gray-400">
						I love to explore about new tech. 
					</div>
				</div>
				<div class="cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark p-6 rounded-md shadow-md hover:shadow-xl space-y-2">
					<h2 class="text-lg uppercase  font-bold text-ternary-dark dark:text-ternary-light ">Problem Solver</h2>
					<div class="text-gray-400">
						I am a great problem solver
					</div>
				</div>
			</div>
		</section> -->

		<!-- Projects -->
		<ProjectsGrid />

		<!-- Load more projects button -->
		<div class="mt-10 sm:mt-20 flex justify-center">
			<router-link
				to="/projects"
				class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
				aria-label="More Projects"
			>
				<Button title="More Projects" />
			</router-link>
		</div>
	</div>
</template>

<style scoped></style>
