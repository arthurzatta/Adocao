import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from './routes/routes';

import Tabs from './routes/tabs.routes'

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  const Routes = () => createRouter(signed);

  return (
    <>
      {signed ? (<Tabs />) : (< Routes />)}
    </>
  )
};
