<template>
  <img
    v-if="icon"
    :src="`https://img.shields.io/badge/${icon.text}-${icon.bgColor}?style=for-the-badge&logo=${icon.logo}&logoColor=${icon.logoColor}`"
    :alt="icon.name"
  />
</template>

<script>
import skillIcons from "../data/skillIcons"
export default {
  name: "SkillIcon",
  props: ["skill"],
  computed: {
    icon() {
      const skillKey = this.skill.toLowerCase();
      if (typeof skillKey === "string" && skillKey in skillIcons) {
        return skillIcons[skillKey];
      }

      return false;
    },
  },
};
</script>
