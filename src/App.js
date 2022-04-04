import './App.css';
import RegisterUser from './containers/Register/RegisterUser.js';
import RegisterPet from './containers/RegisterPet/RegisterPet.js';
import Login from './containers/Login/Login.js';
import Home from './containers/Home/Home.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './containers/Profile/Profile';
import CreateAppointment from './containers/Appointment/CreateAppointment';
import Logout from './containers/Logout/Logout.js';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<RegisterUser />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/register/pet' element={<RegisterPet />} />
          <Route path='/login' element={<Login />} />
          <Route path='/appointment' element={<CreateAppointment />} />
          <Route path='/logout' element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
