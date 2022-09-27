import { FC } from 'react';
import { Form } from '../form';
import './styles.scss';
 
const Main: FC = () => {
  return (
    <main className='main'>
      <h1 className='title'>Виберіть валюту та введіть значення для обрахування</h1>
      <Form/>
    </main>
  );
}
 
export { Main };