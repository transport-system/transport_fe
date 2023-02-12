import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import PublicRoute from './Components/PublicRoute';
import ProtectedRoute from './Components/ProtectedRoute';
import Profile from './pages/Profile';
import ProfilePage from './pages/User/ProfilePage';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import AgencyHome from './pages/Agency/AgencyHome';
import AgencyVehicle from './pages/Agency/AgencyVehicle';
import Logout from "./Components/Logout"
import AgencyTrip from './pages/Agency/AgencyTrip';
import HomeAuth from './pages/HomeAuth';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute><Home/></PublicRoute>}/>
        <Route path="/home" element={<ProtectedRoute><HomeAuth/></ProtectedRoute>}/>

        <Route path="/register" element={<PublicRoute><Register/></PublicRoute>}/>
        <Route path="/login" element={<PublicRoute><Login/></PublicRoute>}/>
        <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
        <Route path="/agency" element={<ProtectedRoute><AgencyHome/></ProtectedRoute>}/>
        <Route path="/agency/vehicle" element={<ProtectedRoute><AgencyVehicle/></ProtectedRoute>}/>
        <Route path="/agency/trip" element={<ProtectedRoute><AgencyTrip/></ProtectedRoute>}/>

        <Route path="/logout" element={<ProtectedRoute><Logout/></ProtectedRoute>}/>

        <Route path='/userProfile' element={<ProfilePage/>}/>

        {/* <Route path="/setting" element={<Setting/>}/> */}

      </Routes>
      </BrowserRouter>
      
    </div>

  );
}

export default App;
