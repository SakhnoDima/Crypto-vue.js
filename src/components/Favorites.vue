<script>
export default {
  props: {
    favorites: {
      typeof: Array,
      required: true,
    },
    getFromFavorites: {
      typeof: Function,
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
  <h3>Variants in favorites</h3>
  <ul>
    <li
      v-for="(el, idx) in this.favorites"
      :key="idx"
      @click="getFromFavorites(idx)"
    >
      <span>{{ el.from }}</span>
      <span>{{ el.to }}</span>
    </li>
  </ul>
</template>

<style scoped>
h3 {
  color: #fff;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

li {
  margin: 0 auto;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 500ms ease;
}

li span {
  padding: 8px 16px;
  background: #8c00ff;
  color: #fff;
}

li:hover {
  opacity: 0.7;
  transform: scale(1.1);
  cursor: pointer;
}
</style>
