<template>
  <NavBar />
  <router-view />
  <notifications position="top center" />
</template>

<script>
import NavBar from "@/components/NavBar";
import messages from "@/utils/messages";
export default {
  name: "app",
  components: {
    NavBar,
  },
  methods: {
    async fetchUserInfo() {
      if (!this.$store.getters.info) {
        await this.$store.dispatch("fetchInfo");
      }
    },
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
  watch: {
    error(fbError) {
      console.log(fbError);
      this.$notify({
        text: messages[fbError.code] || "Что-то пошло не так",
        type: "error",
      });
    },
    $route: "fetchUserInfo",
  },
};
</script>

<style>
@import "assets/style.css";
.vue-notification-group {
  margin-top: 10px;
}
</style>
