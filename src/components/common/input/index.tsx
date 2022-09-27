import { FC, useState } from 'react';
import TextField from '@mui/material/TextField';
import { InputProps } from '../../../common/types';

import './styles.scss';
 
const Input: FC<InputProps> = ({ value, onChange }) => {
  const [error, setError] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    const isNumber = !isNaN(+(e.target.value));
    if (isNumber) {
      setError(false);
      onChange(e.target.value.replace(/\s+/g, ''));
    } else {
      setError(true);
    }
  }
  return (
    <TextField
      error={error}
      id="coin-value"
      label="Value"
      value={value}
      onChange={handleChange}
      variant="outlined"
    />
  );
}
 
export { Input };