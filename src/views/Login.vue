<template>
  <div class="content">
    <div class="login">
      <div class="login-body">
        <form action="#">
          <h2>Simple Chat App</h2>
          <p>Выберите чат и войдите</p>
          <div role="group" class="form-group">
            <input
              type="text"
              placeholder="Введите имя"
              class="form-input"
              v-model="name"
            />
          </div>
          <div role="group" class="form-group">
            <input
              type="password"
              placeholder="Введите пароль"
              class="form-input"
              v-model="password"
            />
          </div>
          <div role="group" class="form-group">
            <v-select
              label="name"
              :options="chats"
              v-model="chat"
              searchable
              placeholder="Выберите чат"
              class="form-select"
            ></v-select>
          </div>
          <div class="form-btn">
            <button type="button" @click="enterChatroom">Войти</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Login",
  data: () => ({
    name: "",
    password: "",
    chat: null,
  }),
  computed: {
    ...mapGetters({
      chats: "getChats",
    }),
  },
  methods: {
    enterChatroom() {
      console.log(`Click: ${this.name} : ${this.password} : ${this.chat}`);
    },
  },
  mounted() {
    this.$store.dispatch("getAllChats");
  },
};
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .login {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 0.25rem;
    min-width: 400px;
    text-align: start;

    padding: 1.5rem;

    box-shadow: 1px 2px 2px 1px #ccc;

    .login-body {
      flex: 1 1 auto;

      padding: 1.25rem;
    }
  }

  .form-group {
    margin-bottom: 1rem;

    .form-input {
      display: block;
      border-radius: 0.25rem;
      padding: 0.375rem 0.75rem;
      width: 100%;
      font-size: 0.85rem;
      line-height: 1.5;
      height: calc(1.5em + 0.75rem + 2px);
      background-clip: padding-box;
      border: 1px solid;
      color: #5c6873;
      background-color: #fff;
      border-color: #a0a5aa;
      outline: none;

      &:focus {
        display: inline-block;
        box-shadow: 0 0 0 2px #88b8ff;
        border-radius: 2px;
      }
    }
  }

  .form-btn {
    display: flex;
    justify-content: flex-end;

    button {
      display: inline-block;
      font-weight: 400;
      color: #fff;
      background-color: #321fbd;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      padding: 0.375rem 0.75rem;
      font-size: 0.85rem;
      border-radius: 0.25rem;
      line-height: 1.5;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }

  .form-select /deep/ .vs__search::placeholder,
  .form-select /deep/ .vs__dropdown-toggle,
  .form-select /deep/ .vs__dropdown-menu {
    border-radius: 0.25rem;
    border-color: #a0a5aa;
    font-size: 0.85rem;
    line-height: 1.5;
    padding: 0.3rem 0.1rem;
    color: #5c6873;
  }

  .form-select /deep/ .vs__selected {
    color: #5c6873;
  }
}
</style>
