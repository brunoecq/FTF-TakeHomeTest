<template>
    <main class="container">
        <section id="about-us" class="section-container first-container">
            <div class="row text-center">
                <div class="col-12">
                    <h2 id="title-principal-about-us" class="first-title">FulltimeForce Test</h2>
                </div>
            </div>
        </section>
        <nav class="panel">
            <p class="panel-heading">
                Configuration (Only public repos)
            </p>
            <div class="panel-block">
                <div class="field control has-icons-left">
                    <label for="interval" class="label">Interval (In seconds)</label>
                    <input class="input" type="text" name="interval" placeholder="Interval time (Default 120 seconds)" v-model="interval">
                    <span class="icon is-left">
                        <i class="fas fa-clock" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div class="panel-block">
                <div class="field control has-icons-left">
                    <label for="username" class="label">Username</label>
                    <input class="input" type="text" name="username" placeholder="Git Username" v-model="username">
                    <span class="icon is-left">
                        <i class="fas fa-user" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div class="panel-block">
                <div class=" field control has-icons-left">
                    <label for="project" class="label">Project</label>
                    <input class="input" type="text" name="project" placeholder="Git Project" v-model="project">
                    <span class="icon is-left">
                        <i class="fas fa-briefcase" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
            <div class="panel-block">
                <button class="button is-link is-outlined is-fullwidth" @click="refresh">
                Reload data (It´s already in realtime)
                </button>
            </div>
            </nav>
        <ListCard :listado="items" />
    </main>
</template>

<script>
import ListCard from "@/components/ListCard.vue";
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";
import { getCommitUrl } from "@/helpers";

export default {
  name: "Main",
  components: {
      ListCard
  },
  setup() {
    const interval = ref(parseInt(process.env.VUE_APP_INTERVAL_TIME))
    const username = ref(process.env.VUE_APP_GIT_USERNAME)
    const project = ref(process.env.VUE_APP_GIT_PROJECT)
    const _base_url = computed(() => store.state.base_url);
    const _git_username = computed(() => store.state.git_username);
    const _git_project = computed(() => store.state.git_project);
    const store = useStore();
    const items = computed(() => store.state.all);
    const refresh = () => {
        store.dispatch("GET_DATA_WITH_PARAMS", getCommitUrl(_base_url.value, _git_username.value, _git_project.value));
    };
    watch(username, (currentValue, oldValue) => {
        store.commit("SET_GIT_USERNAME", currentValue);
        refresh();
    });
    watch(project, (currentValue, oldValue) => {
        store.commit("SET_GIT_PROJECT", currentValue);
        refresh();
    });
    watch(interval, (currentValue, oldValue) => {
        store.commit("SET_INTERVAL", currentValue);
        refresh();
    });
    return {
      items,
      refresh,
      interval,
      username,
      project
    };
  }
};
</script>

<style scoped>
h3, p {
    font-family: Arial !important;
}
.control.has-icons-left .icon, .control.has-icons-right .icon {
    top: 33px;
}
@media (min-width: 1200px){
    .container {
        max-width: 1170px;
    }
}
h2 {
    color: #00ADEF;
    /*font-family: 'Cabin';*/
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    margin: 0;
    padding: 10px 0 5px 0;
}
p {
    font-weight: normal;
}
h3, p {
    color: #485665;
    font-family: 'Open Sans';
}
</style>
