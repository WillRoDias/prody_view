<template>
  <HeadingModal />
  <div class="login-body">
    <div class="login-modal">
      <h1>Login</h1>
      <div class="login-modal-form">
        <div class="login-modal-form input-form">
          <input
            class="login-input"
            type="email"
            v-model="email"
            placeholder="Seu email"
          />
          <input
            class="login-input"
            type="password"
            v-model="password"
            placeholder="Sua senha"
            @keyup.enter="logIn"
          />
          <button v-on:click="logIn" class="login-buttom">Login</button>
          <button v-on:click="signUp" class="login-buttom">cadastrese aqui</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeadingModal from "../components/HeadingModal.vue"
export default {
  name: "LoginModal",
  components:{
    HeadingModal
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async logIn() {
      if (this.email == "" || this.password == "") {
        alert("Preencha todos os campos");
      } else {
        let result = await axios.post("http://localhost:3000/sessions", {
          email: this.email,
          password: this.password,
        });

        console.warn(result);
        if (result.status == 202) {
          alert("bem vindo!");
          localStorage.setItem("user-info", JSON.stringify(result.data.id));
          this.$router.push({ name: "HomePage" });
        } else {
          alert("Usuário inexistente");
        }
      }
    },
    signUp() {
      this.$router.push({ name: "SignUpModal" });
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "HomePage" });
    }
  },
};
</script>

<style>
h1 {
  color: rebeccapurple;
}

.login-buttom{
  cursor: pointer;
  transition-duration: 0.25s;
  font-size: 16px;
}

.login-buttom:hover{
  background: none;
  border: 2px solid rebeccapurple;
  color: rebeccapurple;
}

.login-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.login-modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  border-radius: 15px;
  padding: 20px;
  border-width: 2px;
  border-style: solid;
  border-color: rebeccapurple;
}

.login-modal-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-input {
  margin: 5px;
  height: 40px;
  width: 300px;
  border-radius: 5px;
  border-style: none;
}

button {
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border-style: none;
  background-color: rebeccapurple;
  color: white;
  margin: 5px;
}
</style>