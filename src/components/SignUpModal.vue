<template>
  <HeadingModal />
  <div class="sign-in-body">
    <div class="sign-in-modal">
      <h1>Cadastro</h1>
      <div class="sign-in-form">
        <div class="sign-in-form input-form">
          <input
            class="signup-input"
            type="text"
            v-model="name"
            placeholder="Seu nome"
          />
          <input
            class="signup-input"
            type="email"
            v-model="email"
            placeholder="Seu email"
          />
          <input
            class="signup-input"
            type="password"
            v-model="password"
            placeholder="Sua senha"
          />
          <button v-on:click="signUp">Prosseguir</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeadingModal from "../components/HeadingModal.vue"
export default {
  name: "SignUpModal",
  components:{
    HeadingModal
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      if (this.email == "" || this.email == "" || this.password == "") {
        alert("Preencha todos os campos!");
      } else {
        let result = await axios.post("http://localhost:3000/users", {
          email: this.email,
          name: this.name,
          password: this.password,
        });

        console.warn(result);
        if (result.status == 201) {
          alert("Cadastrado!");
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: "HomePage" });
        }
      }
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

.sign-in-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.sign-in-modal {
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

.sign-in-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.signup-input {
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