import { FC, useState } from 'react';
import { getNameOfCoins } from '../../helper/helper';
import { useGetCurrencyExchangeQuery } from '../../store/queries';
import { Input } from '../common/input';
import { SelectComponent } from '../common/select';
import './styles.scss';
 
const Form: FC = () => {
  const [ leftInputValue, setLeftInputValue ] = useState('');
  const [ leftSelectValue, setLeftSelectValue ] = useState('');
  const [ rightInputValue, setRightInputValue ] = useState('');
  const [ rightSelectValue, setRightSelectValue ] = useState('');
  const { data, isLoading } =useGetCurrencyExchangeQuery();

  const menuItems = data ? getNameOfCoins(data) : [];

  if (isLoading) {
    return null;
  }

  return (
    <form className="form" action="#">
      <div className="input-group">
        <Input value={leftInputValue} onChange={setLeftInputValue}/>
        <SelectComponent
          value={leftSelectValue}
          onChange={setLeftSelectValue}
          menuItems={menuItems}
        />
        <Input value={rightInputValue} onChange={setRightInputValue}/>
        <SelectComponent
          value={rightSelectValue}
          onChange={setRightSelectValue}
          menuItems={menuItems}
        />
      </div>
    </form>
  );
}
 
export { Form };