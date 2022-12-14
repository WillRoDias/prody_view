<template>
  <HeadingModal/>
  <div class="home-body">
    <ShowTaskModal/>
    <CreateTaskModal/>
  </div>
</template>

<script>
import HeadingModal from "../components/HeadingModal.vue";
import ShowTaskModal from "../components/ShowTaskModal";
import CreateTaskModal from "../components/CreateTaskModal.vue"
export default {
  name: "HomePage",
  components: {
    ShowTaskModal,
    HeadingModal,
    CreateTaskModal
  },
  data() {
    return {
      user: "Início",
    };
  },
  methods: {
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "LoginModal" });
    }
  },
};
</script>

<style>

.home-body{
  margin: 40px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100vh;
}

</style>