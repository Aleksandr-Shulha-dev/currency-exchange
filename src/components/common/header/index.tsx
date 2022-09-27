import { FC } from 'react';
import { ExchangeRate } from '../exchange-rate';
import { List } from '../list';
import { CurrencyExchangeRes } from '../../../common/types';
import { useGetCurrencyExchangeQuery } from '../../../store/queries';
import './styles.scss';
 
const Header: FC = () => {
  const { data, isLoading } = useGetCurrencyExchangeQuery();

  if (isLoading) {
    return null;
  }

  return (
    <header className='header'>
        <List
          data={data as CurrencyExchangeRes[]}
          renderComponent={ExchangeRate}
        />
    </header>
  );
}
 
export { Header };