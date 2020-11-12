<template>
  <div class="container">
    <aside class="chat-members">
      <h2 class="chat__title">Список участников</h2>
      <ul class="chat-members__list">
        <li class="chat-members__item" v-for="n in 15" :key="n">
          <span>{{ n }}</span>
          <div>status:</div>
        </li>
      </ul>
      <footer class="chat-members__logout">
        <CustomButton :click="leaveChatRoom">Выйти</CustomButton>
      </footer>
    </aside>
    <main class="chat-window">
      <h2 class="chat__title">Чат</h2>
      <ul class="chat-message__list">
        <li class="chat-message__item" v-for="n in 20" :key="n">
          Message{{ n }}
        </li>
      </ul>
      <div class="chat-window__inputs">
        <input
          type="text"
          v-model="newMessage"
          class="chat-window__input"
          placeholder="Написать в #"
        />
      </div>
    </main>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";

export default {
  title: "Chat Page",
  components: {
    CustomButton,
  },
  data: () => ({
    members: [],
    newMessage: "",
  }),
  methods: {
    leaveChatRoom() {
      this.$router.push({ name: "LoginPage" }).catch(console.log);
    },
  },
};
</script>

<style lang="scss" scoped>
/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #cacaca;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.chat__title {
  margin-bottom: 10px;
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  display: flex;

  .chat-window {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 0 1 900px;
    background-color: #fff;
    padding: 10px;

    .chat-message__list {
      display: flex;
      flex-direction: column;
      overflow: auto;
      margin-bottom: 10px;

      .chat-message__item {
        max-width: 400px;
        margin-bottom: 20px;
        background-color: var(--color-primary);
        padding: 15px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }

    .chat-window__inputs {
      display: flex;
      justify-content: center;

      .chat-window__input {
        display: block;
        border-radius: 0.25rem;
        padding: 0.3rem 0.75rem;
        width: 100%;
        font-size: 0.875rem;
        line-height: 1.5;
        height: calc(1.5em + 0.75rem + 2px);
        background-clip: padding-box;
        border: 1px solid;
        color: var(--color-input);
        background-color: #fff;
        border-color: var(--color-primary);
        outline: none;

        &:focus {
          display: inline-block;
          box-shadow: 0 0 0 2px var(--color-primary);
          border-radius: 2px;
        }
      }
    }
  }

  .chat-members {
    background-color: var(--color-light);
    flex: 0 1 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;

    .chat-members__list {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      overflow: auto;
      margin-bottom: 10px;

      .chat-members__item {
        color: #000;
        background-color: #d0c0fd;
        margin-bottom: 5px;
        border-radius: 5px;
        padding: 10px;
        margin-right: 10px;
      }
    }

    .chat-members__logout {
      display: flex;
      justify-content: flex-end;
    }
  }

  .chat-wrapper {
    background-color: var(--color-light);
    flex: 1 500px;
  }
}
</style>