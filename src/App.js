import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import PublicRoute from './Components/PublicRoute';
import ProtectedRoute from './Components/ProtectedRoute';
import Profile from './pages/Profile';
import ProfilePage from './pages/User/ProfilePage';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/register" element={<PublicRoute><Register/></PublicRoute>}/>
        <Route path="/login" element={<PublicRoute><Login/></PublicRoute>}/>
        <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
        <Route path='/userProfile' element={<ProfilePage/>}/>

        {/* <Route path="/setting" element={<Setting/>}/> */}

      </Routes>
      </BrowserRouter>
      
    </div>

  );
}

export default App;
