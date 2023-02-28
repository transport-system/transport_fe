import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import PublicRoute from './Components/PublicRoute';
import ProtectedRoute from './Components/ProtectedRoute';
import Profile from './pages/Profile';
import ProfilePage from './pages/User/ProfilePage';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import Logout from "./Components/Logout"
import Booking from "./Components/Booking";
import BookingPage from "./Components/BookingPage/BookingPage";
import {useSelector} from "react-redux";
import Loader from "./Components/Loader";
function App() {
    const {loading} =useSelector(state => state.alerts)

    return (
    <div >
        {loading && <Loader/>}
        <BrowserRouter >
      <Routes>
        <Route path="/" element={<PublicRoute><HomePage/></PublicRoute>}/>

        <Route path="/register" element={<PublicRoute><Register/></PublicRoute>}/>
          <Route path="/booking" element={<PublicRoute><Booking/></PublicRoute>}/>

          <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>

          <Route path="/booking/:id" element={<PublicRoute><BookingPage/></PublicRoute>}/>

          <Route path="/logout" element={<PublicRoute><Logout/></PublicRoute>}/>

        <Route path='/userProfile' element={<ProfilePage/>}/>

        {/* <Route path="/setting" element={<Setting/>}/> */}

      </Routes>
      </BrowserRouter>
      
    </div>

  );
}

export default App;
