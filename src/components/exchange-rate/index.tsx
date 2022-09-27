import { FC } from 'react';
import { ExchangeRateProps } from '../../common/types';
import euFlag from '../../assets/image/eu.png';
import usaFlag from '../../assets/image/usa.png';
import btcFlag from '../../assets/image/btc.png';

import './styles.scss';
 
const ExchangeRate: FC<ExchangeRateProps> = ({ data }) => {
  const {ccy, buy, sale} = data;
  const flag = ccy === "USD" ? usaFlag : ccy === "EUR" ? euFlag : btcFlag;
  return (
    <div className='rate'>
      <span className='flag'>
        <img src={flag} alt="coin" />
      </span>
      <span>{ccy}</span>
      <span>{(+buy).toFixed(2)}</span>
      <span className='slash'>/</span>
      <span>{(+sale).toFixed(2)}</span>
    </div>
  );
}
 
export { ExchangeRate };