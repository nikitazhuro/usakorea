import './App.css';

import AppRouter from './lib/router/AppRouter';
import MenuRoot from './modules/Menu';

function App() {
  return (
    <div className="App">
      <MenuRoot/>
      <AppRouter />
    </div>
  );
}

export default App;
