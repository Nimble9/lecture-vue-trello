<template>
  <div>
    Board
    <div>
      <div v-if="loading">loading Board...</div>
      <div v-else>
        <div>bid: {{ bid }}</div>
        <router-link :to="`/b/${bid}/c/1`">Card 1</router-link>
        <router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
      </div>
      <hr />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bid: 0,
        loading: false
      }
    },
    created() {
      this.fetchData();
      // console.log(this.$route.params);
    },
    methods: {
      fetchData() {
        this.loading = true;
        setTimeout(() => {
          this.bid = this.$route.params.bid;
          this.loading = false;
        }, 500);
      }
    }
  }
</script>

<style>

</style>
