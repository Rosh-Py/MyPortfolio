import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Header, Sidebar } from './components';
import './index.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar/>
      <Router>
        <Switch>
          <Route exact path='/'>
            <div>Hello</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
