<template>
  <div class="login">
    <div class="login__header">
      <h3>Simple Socket Chat</h3>
    </div>
    <div class="form-wrapper">
      <form action="POST" class="login__form">
        <label for="name">Имя пользователя</label><input type="text" name="name" id="name">
        <label for="password">Пароль</label><input type="password" name="password" id="password">
        <label for="chat">Выберите чат</label>
        <select name="chat" id="chat">
          <option value="Vue">Vue</option>
        </select>
        <button type="submit" @submit.prevent="" id="submit-btn">Войти</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data: () => ({

  }),
  mounted() {
    this.$store.dispatch('getAllChats')
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 500px;
  height: 300px;
  background: blue;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  margin: 0 auto;

  .login__header {
    background: red;
    height: 56px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;

    h3 {
      color: white;
    }
  }

  .form-wrapper {
    width: 60%;
    padding: 10px;
    margin: auto;

    
    .login__form {
      display: flex;
      flex-direction: column;

    }
  }

}
</style>
