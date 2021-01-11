<template>
  <div id="app">
<!--    여기서 부터 {{ msg }} 코드를 시작!-->
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./componenets/NavBar";
export default {
  name: 'app',
  components: { NavBar },
  data () {
    return {
      msg: `test`
    }
  }
}
</script>

<style>
  html, body, #app {
    height: 100%;
    margin: 0px;
  }
  #app {
    display: flex;
    flex-direction: column;
  }
  .container {
    flex-grow: 1;
    position: relative;
  }
  .btn {
    border-radius: 3px;
    padding: 6px 8px;
    background-color: #e2d4e6;
    border: none;
    display: inline-block;
    color: white;
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    cursor: pointer;
  }
  .btn-success {
    background-color: #5aac44;
    box-shadow: 0 1px 0 #519839;
  }
  .form-control {
    width: 100%;
    box-sizing: border-box;
    background-color: #e2d4e6;
    border: 1px solid #cdd2d4;
    border-radius: 3px;
    margin-bottom: 12px;
    padding: 6px 8px;
    transition: background-color .3s;
  }
  input[type=text].form-control,
  input[type=password].form-control,
  textarea.form-control {
    font-size: 14px;
  }
  .form-control.focus {
    background-color: white;
  }
</style>
