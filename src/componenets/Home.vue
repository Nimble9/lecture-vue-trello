 <template>
  <div>
    home

    <div>
      Board List:
      <div v-if="loading">Loading...</div>
      <div v-else>
        Api result:
        <div>
          <pre>
            {{ boards }}
          </pre>
        </div>
      </div>
      <ul>
        <li>
          <router-link to="/b/1">Board 1</router-link>
        </li>
        <li>
          <router-link to="/b/2">Board 2</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import { board } from "../api";


  export default {
    data() {
      return {
        loading: false,
        boards: []
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.loading = true;
        board.fetch()
          .then(data => {
            // console.log(res);
            this.boards = data;
          })
          .finally(_ => {
            this.loading = false;
          });

        // axios.get("http://localhost:3000/boards")
        // .then((res) => {
        //   // console.log(res);
        //   this.boards = res.data;
        // })
        // .catch((err) => {
        //   this.$router.replace("/login");
        //   // console.log(this.$router);
        // })
        // .finally(() => {
        //   this.loading = false;
        // });
      }
    }
  }
</script>

<style>

</style>
