<script>
import Input from "./components/Input.vue";
import Selector from "./components/Selector.vue";
import Error from "./components/Errors.vue";
import Button from "./components/Button.vue";
import Favorites from "./components/Favorites.vue";

import { converter } from "./assets/utils/converter";

export default {
  components: { Input, Selector, Error, Button, Favorites },
  data() {
    return {
      amount: null,
      cryptoFrom: "",
      cryptoTo: "",
      error: "",
      result: null,
      favorites: [],
    };
  },
  methods: {
    changeAmount(val) {
      this.error = "";
      if (val <= 0) {
        this.error = "Amount cannot be 0 or less than 0";
      }
      this.amount = val;
    },
    setFavorite() {
      if (this.cryptoFrom === this.cryptoTo) {
        return;
      } else if (this.cryptoFrom && this.cryptoTo) {
        this.favorites.push({
          from: this.cryptoFrom,
          to: this.cryptoTo,
        });
      }
    },
    getFromFavorites(idx) {
      this.cryptoFrom = this.favorites[idx].from;
      this.cryptoTo = this.favorites[idx].to;
    },
    setCrypto(val, type) {
      if (type) {
        this.cryptoFrom = val;
      } else this.cryptoTo = val;
    },
    async convert() {
      this.error = "";
      if (this.amount === null) {
        this.error = "Pleas chose amount!";
        return;
      } else if (this.cryptoFrom === this.cryptoTo) {
        return (this.error = "Chose another crypto!");
      } else if (this.cryptoFrom === "" || this.cryptoTo === "") {
        return (this.error = "Chose crypto!");
      }
      this.error = "";

      this.result = await converter(
        this.amount,
        this.cryptoFrom,
        this.cryptoTo
      );
    },
  },
};
</script>

<template>
  <h1>CRIPTO</h1>

  <Input :changeAmount="this.changeAmount" />
  <div className="buttonBox">
    <Button :onClick="this.convert" :name="'Convert'" />
    <Button :onClick="this.setFavorite" :name="'Add to Favorite'" />
  </div>

  <Favorites
    v-if="this.favorites.length > 0"
    :favorites="this.favorites"
    :getFromFavorites="getFromFavorites"
  />
  <div className="selectors">
    <Selector
      :setCrypto="setCrypto"
      :action="true"
      :cryptoNow="this.cryptoFrom"
    />
    <Selector
      :setCrypto="setCrypto"
      :action="false"
      :cryptoNow="this.cryptoTo"
    />
  </div>
  <p className="result" v-if="this.result !== null">{{ this.result }}</p>
  <Error :value="this.error" />
</template>

<style scoped>
.selectors {
  display: flex;
  justify-content: space-around;
  width: 700px;
  margin: 50px auto 0;
}
.buttonBox {
  width: 700px;
  margin: 0 auto;
  display: flex;
}
.result {
  font-family: "Nabla", cursive;
  margin-top: 50px;
  font-size: x-large;
}
</style>
