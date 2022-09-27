import { FC } from 'react';
import { Header } from '../header';
import { Main } from '../main';
import './styles.scss';

const App: FC = () => {
  return (
    <div className='app'>
      <Header/>
      <Main/>
    </div>
  )
}

export { App };
