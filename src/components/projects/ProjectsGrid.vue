<script>
import feather from "feather-icons";
import ProjectSingle from "./ProjectSingle.vue";
import projects from "../../data/projects";
import VModal from "../reusable/VModal.vue";
import ProjectInfos from "../../data/projects_single";
import ProjectInfoSingle from "../projects/ProjectInfoSingle.vue";
export default {
  components: { ProjectSingle, VModal, ProjectInfoSingle },
  data: () => {
    return {
      projects,
      projectsHeading: "Projects Portfolio",
      selectedCategory: "",
      searchProject: "",
      showModal: false,
      selectedProject: "",
    };
  },
  computed: {
    // Get the filtered projects
    filteredProjects() {
      if (this.selectedCategory) {
        return this.filterProjectsByCategory();
      } else if (this.searchProject) {
        return this.filterProjectsBySearch();
      }
      return this.projects;
    },
    projectInfo() {
      return this.selectedProject ? ProjectInfos[this.selectedProject] : null;
    },
  },
  methods: {
    // Filter projects by category
    filterProjectsByCategory() {
      return this.projects.filter((item) => {
        let category =
          item.category.charAt(0).toUpperCase() + item.category.slice(1);
        console.log(category);
        return category.includes(this.selectedCategory);
      });
    },
    // Filter projects by title search
    filterProjectsBySearch() {
      let project = new RegExp(this.searchProject, "i");
      return this.projects.filter((el) => el.title.match(project));
    },
    // show project detail
    showDetail(page) {
      this.selectedProject = page;
      this.$refs.modal.show();
    },
  },
  mounted() {
    feather.replace();
  },
};
</script>

<template>
  <!-- Projects grid -->
  <section class="pt-10 sm:pt-14">
    <!-- Projects grid title -->
    <div class="text-center mb-10 sm:mb-14">
      <p
        class="font-general-semibold text-3xl sm:text-4xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
      >
        {{ projectsHeading }}
      </p>
    </div>

    <!-- Projects grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <ProjectSingle
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
        @selected="showDetail(project.id)"
      />
    </div>

    <!-- project single detail modal -->
    <VModal ref="modal">
      <ProjectInfoSingle
        v-if="projectInfo"
        :challanges="projectInfo.challanges"
        :tech="projectInfo.techUsed"
        :summary="projectInfo.summary"
        :title="projectInfo.title"
        :github="projectInfo?.github"
        :url="projectInfo.url"
      />
    </VModal>
  </section>
</template>

<style scoped></style>
