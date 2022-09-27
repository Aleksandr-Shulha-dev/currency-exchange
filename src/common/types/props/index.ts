import { FC, ReactNode, ComponentType } from 'react';
import { CurrencyExchangeRes } from './../rtkQuery/index';

interface ExchangeRateProps {
  data: CurrencyExchangeRes;
}

interface ListProps {
  data: CurrencyExchangeRes[];
  renderComponent: FC<ExchangeRateProps>;
}

export type { ListProps, ExchangeRateProps };