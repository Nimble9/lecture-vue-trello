<template>
  <div>
    Card
    <div v-if="loading">loading Card...</div>
    <div v-else>
      <div>cid: {{ cid }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cid: 0,
        loading: false
      }
    },
    watch: {
      '$route': {
        handler: 'fetchData',
        immediate: true
        // this.cid = this.$route.params.cid;
        // this.fetchData();
      }
    },
    created() {
      this.fetchData();
      // console.log(this.$route.params.cid);
    },
    methods: {
      fetchData() {
        this.loading = true;
        setTimeout(() => {
          this.cid = this.$route.params.cid;
          this.loading = false;
        }, 500);
      }
    }
  }
</script>

<style></style>
