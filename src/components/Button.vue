<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    name: {
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
  <button @click="this.onClick" className="main">
    <p>{{ this.name }}</p>
  </button>
</template>

<style scoped>
.main {
  display: block;
  width: 200px;
  margin: 20px auto;
  padding: 15px 20px;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  background: #3b0b62;
  border: 2px solid #000;
  border-radius: 3px;
  transition: transform 500ms ease;
}
button:hover {
  transform: scale(1.1);
}
button:hover p {
  color: rgb(214, 231, 60);
}
</style>
