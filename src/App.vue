<template>
    <Main />
</template>

<script>
import Main from "./components/Main.vue";
import { getCommitUrl } from "@/helpers";

import { onMounted, watch, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: {
    Main
  },
  mixins: [],
  setup() {
    const store = useStore();
    const interval = computed(() => store.state.interval);
    const base_url = computed(() => store.state.base_url);
    const git_username = computed(() => store.state.git_username);
    const git_project = computed(() => store.state.git_project);
    const refresh = () => {
        store.dispatch("GET_DATA_WITH_PARAMS", getCommitUrl(base_url.value, git_username.value, git_project.value));
    };
    watch(interval, (currentValue, oldValue) => {
      let t
      if (currentValue && !t) { 
          t = setInterval(() => {
            refresh();
          }, currentValue * 1000)
      } else {
          clearInterval(t)
      }
    });
    onMounted(() => {
      store.commit("SET_BASE_URL", process.env.VUE_APP_BASE_URL);
      store.commit("SET_GIT_USERNAME", process.env.VUE_APP_GIT_USERNAME);
      store.commit("SET_GIT_PROJECT", process.env.VUE_APP_GIT_PROJECT);
      store.commit("SET_INTERVAL", parseInt(process.env.VUE_APP_INTERVAL_TIME)); //Default time 2 minutes
      refresh();
    });
  }
};
</script>

<style>
body {
    margin: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: left;
    background-color: #fff;
}

@import'~bulma/css/bulma.css'
</style>