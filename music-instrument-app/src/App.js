import { Route,BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <div>
        <switch>
          <Route exact path="/signin">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <SignUp/>
          </Route>
        </switch>
      </div>
    </Router>
  );
}

export default App;
