import './App.css';
import Navbar from './components/navbar/navbar';
import { Routes, Route , BrowserRouter } from 'react-router-dom'
import Home from './components/home/home';
import Edit from './components/edit/edit';
import DashBoard from './components/dashboard/dashboard';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/dashBoard" element={<DashBoard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
