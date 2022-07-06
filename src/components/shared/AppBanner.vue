<script>
import feather from 'feather-icons';
import Social from "@/components/shared/Social.vue";
export default {
	name: 'Home',
	components: {
		Social
	},
	data: () => {
		return {
			theme: '',
		};
	},
	created() {
		this.theme = localStorage.getItem('theme') || 'light';
	},
	mounted() {
		feather.replace();
		this.theme = localStorage.getItem('theme') || 'light';
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<section
		class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-[7rem]"
	>
		<!-- Banner left contents -->
		<div class="w-full md:w-2/4 text-left order-2 sm:order-1">
			<h1
				class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light mb-6"
			>
				Hi, I'm Venkatesh Bishu
			</h1>
			<p
				class="text-lg sm:text-xl  xl:text-2xl text-center sm:text-left text-gray-400 mb-6"
			>
			A <b class="text-red-500 dark:text-red-400"> software engineer </b> having expertise in <b class="text-red-500 dark:text-red-400"> VueJS</b>. Passion for developing web application that can solve real world problem. <br> I can turn your web application idea into a reality.
			</p>
			
			<p
				class="text-lg sm:text-xl  xl:text-2xl text-center sm:text-left text-gray-400 uppercase font-general-semibold"
			>
				Connect me at </p>

			<div class="flex flex-col sm:flex-row items-center mt-6 gap-6">
				<Social />
				<a
					download="Venkatesh-Bishu-Resume.pdf"
					href="/files/resume.pdf"
					class="flex justify-center items-center w-36 sm:w-48 mb-6 sm:mb-0 text-lg border border-red-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-red-50 focus:ring-1 focus:ring-red-900 hover:bg-red-500 dark:hover:bg-red-400 text-gray-400 hover:text-white duration-500"
					aria-label="Download Resume"
				>
					<i
						data-feather="arrow-down-circle"
						class="ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
					></i>
					<span
						class="text-sm sm:text-lg font-general-medium duration-100"
						>Resume</span
					></a
				>
			</div>
		</div>

		<!-- Banner right illustration -->
		<div class="w-full md:w-2/4 h-[450px] order-1 sm:order-2 mb-6 sm:mb-0">
			<div class="shadow-2xl md:ml-20 h-full relative">	
				<img
					src="@/assets/images/bishu-transparent.png"
					alt="Developer"
					class="ml-auto absolute top-[-126px] max-w-[320px] left-0 sm:left-1/4"
				/>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
