<template>
  <div>
    <div class="container py-4 xl:py-10 mx-auto text-left">
      <h1
        class="font-general-semibold text-2xl md:text-3xl xl:text-4xl text-ternary-dark mb-6"
      >
        {{ title }}
      </h1>

      <!-- tech used -->
      <div class="mb-3">
        <h2
          class="font-general-semibold text-xl md:text-xl xl:text-2xl text-ternary-dark mb-6"
        >
          {{ tech.title }}
        </h2>
        <ul class="flex flex-wrap">
          <li v-for="(item, index) in tech.tech" :key="index" class="mb-2">
            <SkillIcon :skill="item"/>
          </li>
        </ul>
      </div>

      <!-- summary -->
      <div class="mb-3">
        <h2
          class="font-general-semibold text-xl md:text-xl xl:text-2xl text-ternary-dark mb-6"
        >
          {{ summary.title }}
        </h2>
        <p v-for="(item, index) in summary.details" :key="index" class="text-lg xl:text-xl mb-2">
          <span v-html="item"></span>
        </p>
      </div>

      <!-- challanges -->
      <div class="mb-3">
        <h2
          class="font-general-semibold text-xl md:text-xl xl:text-2xl text-ternary-dark mb-6"
        >
          {{ challanges.title }}
        </h2>
        <p
          v-for="(item, index) in challanges.details"
          :key="index"
          class="text-lg xl:text-xl mb-2"
        >
          <span v-html="item"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import SkillIcon from "../SkillIcon.vue";
export default {
  name: "ProjectInfoSingle",
  props: ["title", "tech", "summary", "challanges"],
  components: {
    SkillIcon
  }
};
</script>
