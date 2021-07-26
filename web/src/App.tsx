import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import { NavigationBar } from '../src/components';

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
