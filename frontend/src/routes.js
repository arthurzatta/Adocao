import { createAppContainer, createSwitchContainer } from 'react-navigation';

import LandingPage from './pages/LandingPage';

export default createAppContainer(
  createSwitchContainer({
    LandingPage
  })
);
