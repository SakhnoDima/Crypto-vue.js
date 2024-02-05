<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <p v-show="this.value" className="error">{{ this.value }}</p>
</template>

<style scoped>
.error {
  margin-top: 40px;
  color: red;
}
</style>
