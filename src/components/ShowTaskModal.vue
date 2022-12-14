<template>
  <div class="tasks-dash">
    <h1>Minhas Tasks {{ date }} </h1>
    <div class="tasks-each" v-for="todo in todos" v-bind:key="todo">
      <div>
        <input class="inp" type="checkbox" />
      </div>
      <div>
        <p>{{ todo.text }}</p>
      </div>
      <div>
        <button class="btn-excluir">Excluir</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowTaskModal",
  data() {
    return {
      todos: [
        { text: "william" },
        { text: "rebeca" },
        { text: "black" },
        { text: "pita" },
      ],
      date: "hoje"
    };
  },
};
</script>

<style>
p {
  font-size: 25px;
}

.inp {
  margin: 20px;
}

.btn-excluir {
  width: 60px;
  background-color: white;
  border: solid 2px red;
  color: red;
  transition-duration: 0.25s;
  cursor: pointer;
}

.btn-excluir:hover{
  background-color: red;
  color: whitesmoke;
}

.tasks-dash {
  background-color: whitesmoke;
  padding: 20px;
  margin: 10px;
  border-radius: 15px;
}

.tasks-each {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  width: 700px;
  height: 50px;
  border-radius: 15px;
  margin: 20px;
  padding: 10px;
}
</style>