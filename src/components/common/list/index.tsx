import { FC } from 'react';
import { ListProps } from '../../../common/types';
import './styles.scss';
 
const List: FC<ListProps> = ({ data, renderComponent}) => {
  return (
    <ul className="list">
      {
        data.map((item, index) => (
          <li className='item' key={index}>
            {renderComponent({ data: item })}
          </li>
        ))
      }
    </ul>
  );
}
 
export { List };