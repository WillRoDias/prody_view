<template>
  <div class="create-task body">
    <div class="create-task dash">
      <h1>Criar nova tarefa</h1>
      <div class="create-task input-form">
        <input class="input-task" type="text" placeholder="Nome da task" />
        <input class="input-task" type="text" placeholder="Descrição" />
        <input class="input-task" type="text" placeholder="data"/>
      </div>
      <button class="create-task-buttom">Criar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateTaskModal",
};
</script>

<style>
.body {
  background-color: whitesmoke;
  padding: 20px;
  margin: 10px;
  border-radius: 15px;
}

.dash{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.input-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.input-task {
  margin: 5px;
  height: 40px;
  width: 300px;
  border-radius: 5px;
  border-style: none;
}

.create-task-buttom{
  background-color: rebeccapurple;
  color: whitesmoke;
  cursor: pointer;
  transition-duration: 0.25s;

}
.create-task-buttom:hover{
  background-color: whitesmoke;
  border: solid 2px rebeccapurple;
  color: rebeccapurple;
}

</style>