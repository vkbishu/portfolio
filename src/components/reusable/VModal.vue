<template>
  <div>
    <!-- back drop -->
    <div
      class="fixed inset-0 z-40 bg-black/80"
      v-show="isVisibile"
      @click="hide"
    ></div>
    <div
      class="border h-full xl:h-[80%] w-full fixed z-50 left-0 bottom-0 bg-white overflow-auto transition-transform duration-300"
      :class="modalClass"
    >
      <div class="h-6 w-6 absolute right-8 top-4 cursor-pointer" @click="hide">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path
            d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
          />
        </svg>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "VModal",
  props: {
    showModal: Boolean,
  },
  data() {
    return {
      isVisibile: false,
    };
  },
  computed: {
    modalClass() {
      return {
        "translate-y-[100%]": !this.isVisibile,
      };
    },
  },
  methods: {
    hide() {
      this.isVisibile = false;
    },
    show() {
      this.isVisibile = true;
    },
  },
  watch: {
    showModal(newVal) {
      this.isVisibile = newVal;
    },
  },
};
</script>
