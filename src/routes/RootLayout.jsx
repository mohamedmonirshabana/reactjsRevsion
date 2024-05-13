import { Qutlet } from 'react-router-dom';

import MainHeader from '../components/MainHeader';

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Qutlet />
    </>
  );
}

export default RootLayout;
