
import './App.css';
import { Register } from './pages/register-login/Register';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Login } from './pages/register-login/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

        <Route path="/" element ={ <Login/>}/> 
        <Route path="/register" element ={ <Register/>}/> 
        <Route path="/dashboard" element ={ <Dashboard/>}/> 


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
