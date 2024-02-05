<script>
export default {
  props: {
    changeAmount: {
      type: Function,
      required: true,
    },
  },
};
</script>

<template>
  <input
    min="0"
    type="number"
    @input="changeAmount($event.target.value)"
    placeholder="Enter number"
  />
</template>

<style scoped>
input {
  outline: none;
  width: 500px;

  font-size: 1.2em;
  border-radius: 5px;
  border: 0;
  padding: 10px 15px;
  background: #fafafa;
  color: #333;
}
</style>
