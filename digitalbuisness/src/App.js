
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';





function App() {
  return (
    <div id="dashboard">
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route path="Dashboard" element={<Dashboard/>}>
           </Route>
          </Route>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
