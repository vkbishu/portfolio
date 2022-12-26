<script>
export default {
  name: "Social",
  data() {
    return {
      socials: [
        {
          id: 1,
          name: "GitHub",
          icon: "github",
          url: "https://github.com/vkbishu",
        },
        {
          id: 2,
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/vkbishu",
        },
        {
          id: 3,
          name: "Linkedin",
          icon: "linkedin",
          url: "https://www.linkedin.com/in/vkbishu/",
        },
      ],
    };
  },
};
</script>

<template>
  <ul class="flex gap-2 sm:gap-4">
    <a
      v-for="social in socials"
      :key="social.id"
      :href="social.url"
      target="__blank"
      class="text-gray-400 hover:text-red-500 dark:hover:text-red-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"
    >
      <i :data-feather="social.icon" class="w-5 sm:w-8 h-5 sm:h-8"></i>
    </a>
  </ul>
</template>
