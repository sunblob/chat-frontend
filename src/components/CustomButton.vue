<template>
  <button
    @click.prevent="handleClick"
    class="custom-button"
    :style="{ color: color, 'background-color': bg }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    bg: {
      type: String,
    },
    color: {
      type: String,
    },
    click: {
      type: Function,
    },
  },
  methods: {
    handleClick() {
      if (!this.click) {
        return;
      } else {
        this.click();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-button {
  display: inline-block;
  font-weight: 400;
  color: #fff;
  background-color: var(--color-primary);
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  padding: 0.375rem 0.75rem;
  font-size: 0.85rem;
  border-radius: 0.25rem;
  line-height: 1.5;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  &:hover {
    background-color: var(--color-gray);
  }
}
</style>