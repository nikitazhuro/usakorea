import { useEffect } from 'react';
import ReactGA from 'react-ga';

import './App.css';

import AppRouter from './lib/router/AppRouter';
import MenuRoot from './modules/Menu';


function App() {
  useEffect(() => {
    ReactGA.initialize("UA-299599591-1");
  }, []);

  return (
    <div className="App">
      <MenuRoot/>
      <AppRouter />
    </div>
  );
}

export default App;
