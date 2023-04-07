import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import classes from './Layout.module.scss';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <div className={classes.container}>
        <main>{children}</main>
      </div>
    </Provider>
  );
};

export default Layout;
