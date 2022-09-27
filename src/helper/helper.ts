import { CurrencyExchangeRes } from "../common/types";

const getNameOfCoins = (data: CurrencyExchangeRes[]) => {
  return data.map(item => item.ccy);
};

export { getNameOfCoins };