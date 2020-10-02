<template>
  <header class="header-main">
    <div class="header-buttons">Выйти</div>
    <div class="header-logo">
      <icon-account fillColor="#fff" :size="36" />
    </div>
  </header>
</template>

<script>
import Account from "vue-material-design-icons/Account";

export default {
  components: {
    "icon-account": Account,
  },
};
</script>

<style lang="scss" scoped>
.header-main {
  padding: 0 1rem;
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  background: #321fbd;

  .header-buttons {
    color: #fff;
  }

  .header-logo {
    max-width: 50px;
    margin-left: auto;
  }
}
</style>