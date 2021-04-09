<template>
  <div class="card my-3" :id="item.sha">
    <div class="card-content">
      <h4 class="title"><a :href="item.html_url" class="card-link" target="_blank">Sha: {{ item.sha }}</a></h4>
      <p><small class="card-text text-muted mb-3">Date: {{ fixTime(item.commit.committer.date) }} <i class="text-muted">({{ agoTime(item.commit.committer.date) }})</i></small></p>
      <h6 class="card-subtitle mb-3">Message: {{ item.commit.message }} </h6>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item" style="justify-content: left;">
        <a v-if="item.author" :href="item.author.html_url" target="_blank">
        <img class="profile-picture no-bottom" :src="item.author.avatar_url" />
        <p class="mx-2 no-bottom up" ><small>{{ item.author.login}}</small></p>
      </a>
      <img class="profile-picture no-bottom card-footer-item" v-else src="https://via.placeholder.com/25" />
      </p>
    </footer>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: "Card",
  props: ["item"],
  components: {
  },
  setup() {
    const fixTime = (o) => moment(o).format('MMMM Do YYYY, h:mm:ss a')
    const agoTime = (o) => moment(o).startOf('hour').fromNow()
    return {
      fixTime,
      agoTime
    };
  }
};
</script>

<style scoped>
a {
    color: inherit;
    text-decoration: none;
}
a:hover {
    color: #00ADEF;
}
.profile-picture{
  -webkit-background-size: 25px 25px;
  background-size: 25px 25px;
  border: 0;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  display: block;
  margin: 0;
  position: relative;
  height: 25px;
  width: 25px;
  z-index: 0;
}
h4{
  margin-bottom: 0;
}
.no-bottom{
  display: inline-block;
  margin-bottom: 0;
}

.up{
  position: relative;
  top: -8px;
}

</style>
