<template>
  <!-- <HeadingModal /> -->
  <router-view />
</template>

<script>
// import HeadingModal from "./components/HeadingModal.vue";

export default {
  name: "App",
  components: {
    // HeadingModal,
  },
};
</script>

<style>
body {
  margin: 0px;
}

#app {
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(325deg, rebeccapurple, yellow);
  background-attachment: fixed;
  /* font-family: "Roboto", sans-serif; */
  font-family: 'Nunito', sans-serif;
  height: 100vh;
  width: 100vw;
  margin: 0px;
  padding: 0px;
  border: none;
}

.heading-page {
  display: flex;
  flex-direction: row;
}

.body-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}
</style>
