<template>
  <div class="heading-modal">
    <h1>Prody.</h1>
    <!-- <div>{{ user_name }}</div> -->
    <button v-on:click="logOut" v-if="loggedIn" class="exit-buttom">
      sair
    </button>
  </div>
</template>

<script>
export default {
  name: "HeadingModal",
  data() {
    return {
      user_name: "",
    };
  },
  methods: {
    logOut() {
      console.log("sair");
      localStorage.removeItem("user-info");
      this.$router.push({ name: "LoginModal" });
    },
  },
  computed: {
    loggedIn() {
      let user = localStorage.getItem("user-info");
      if (user) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.user_name = user;
    }
  },
};
</script>

<style>
.heading-modal {
  height: 75px;
  padding: 0px 50px 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.exit-buttom {
  width: 150px;
  background: none;
  border: solid 2px rebeccapurple;
  color: rebeccapurple;
  font-size: 18px;
  transition-duration: 0.25s;
  cursor: pointer;
}

.exit-buttom:hover{
  background-color: rebeccapurple;
  color: whitesmoke;
}
</style>