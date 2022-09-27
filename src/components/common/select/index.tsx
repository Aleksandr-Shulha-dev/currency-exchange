import { FC } from 'react';
import { SelectComponentProps } from '../../../common/types';
import { Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select'
import './styles.scss';
 
const SelectComponent: FC<SelectComponentProps> = ({ value, onChange, menuItems}) => {
  const handleChange = (e: SelectChangeEvent):void => {
    onChange(e.target.value)
  }
  return (
    <>
      <Select
        id="coin-select"
        value={value}
        label="Coin"
        onChange={handleChange}
        className="select"
      >
        {menuItems.map((item, key) => (
          <MenuItem value={item} key={key}>{item}</MenuItem>
        ))}
      </Select>
    </>
  )
}
 
export { SelectComponent };