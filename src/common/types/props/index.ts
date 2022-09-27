import { FC, Dispatch } from 'react';
import { CurrencyExchangeRes } from './../rtkQuery/index';

interface ExchangeRateProps {
  data: CurrencyExchangeRes;
}

interface ListProps {
  data: CurrencyExchangeRes[];
  renderComponent: FC<ExchangeRateProps>;
}

interface InputProps {
  value: string;
  onChange: Dispatch<string>;
}

interface SelectComponentProps extends InputProps {
  menuItems: string[];
}

export type {
  ListProps,
  ExchangeRateProps,
  InputProps,
  SelectComponentProps
};