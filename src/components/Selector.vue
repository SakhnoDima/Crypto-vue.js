<script>
import { cryptos } from "../assets/constants/constants";

export default {
  props: {
    setCrypto: {
      type: Function,
      required: true,
    },
    cryptoNow: {
      type: String,
      required: true,
    },
    action: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      cryptos: cryptos,
    };
  },
  methods: {},
};
</script>

<template>
  <ul>
    <li
      v-for="(el, idx) in cryptos"
      :key="idx"
      @click="this.setCrypto(el.name, this.action)"
      :className="this.cryptoNow === el.name ? 'active' : ''"
    >
      {{ el.value }}
    </li>
  </ul>
</template>
<style scoped>
ul {
  list-style: none;
  width: 200px;
  padding: 0;
  border-radius: 3px;
  border: 3px solid #000;
}
li {
  display: block;
  background: #3b0b62;
  color: #fff;
  padding: 20px 0;
}

li:hover,
li.active {
  background: #1c0331;
  cursor: pointer;
  border-radius: 20px;
  color: rgb(214, 231, 60);
}
</style>
