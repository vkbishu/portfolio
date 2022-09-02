export default {
    title: "MOLT Control Panel (Mars OLT)",
    techUsed: {
      title: "Tech Used",
      tech: ["vuejs", "vue-router", "vuex", "html", "css", "typescript"],
    },
    summary: {
      title: "Summary",
      details: [
        "MOLT is an OLT device. OLT's are networking devices connected with ONU's. Through their control panel, you can configure, control and monitor ONU's connected with it.",
      ],
    },
    challanges: {
      title: "Challanges",
      details: [
        "Migrating to Vue3: Initially MOLT Control Panel was developed in Vue2 but after the official release of Vue3, it is migrated in Vue3. We have also added typescript support so we can have a proper control over objects and functions.",

        "Reducing App Size: Due to integration of different UI component libraries, the overall app size gets increased. During the migration process, we removed all those libraries where we had to use only small components but imported the whole library. After that, we developed similar components to support removed components and to make app stable.",

        "Increasing Loading Performance: To decrease the app loading time, we used lazy loading routers in our application. Applications were broken down into chunks and are loaded on-demand. We decrease the main entry file size so it could load fast."
      ],
    },
  };
  