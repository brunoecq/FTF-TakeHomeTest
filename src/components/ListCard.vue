<template>
<div class="content">
  <div class="panel">
    <Card v-for="(o, x) in listado" :key="x" :item="o" />
  </div>
</div>
</template>

<script>

import Card from "./Card";

export default {
  name: "ListCard",
  props: [ "listado"],
  components: {
    Card
  }
};
</script>
