import CryptoConvert from "crypto-convert";
const convert = new CryptoConvert();

export const converter = async (value, from, to) => {
  await convert.ready();
  if (from === "BIT" && to === "ETH") {
    return convert.BTC.ETH(value);
  } else if (from === "BIT" && to === "USDT") {
    return convert.BTC.USDT(value);
  } else if (from === "ETH" && to === "BIT") {
    return convert.ETH.BTC(value);
  } else if (from === "ETH" && to === "USDT") {
    return convert.ETH.USDT(value);
  } else if (from === "USDT" && to === "BIT") {
    return convert.USDT.BTC(value);
  } else if (from === "USDT" && to === "ETH") {
    return convert.USDT.ETH(value);
  }
};
