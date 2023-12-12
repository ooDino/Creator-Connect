import {BrowserRouter, Routes, Route} from "react-router-dom"
import Landingpage from '../pages/Landing.jsx'
import Profilepage from '../pages/Profile.jsx'
import Searchpage from '../pages/UserSearch.jsx'
import Tutorialpage from '../pages/Tutorial.jsx'
import ContactUs from '../pages/Contact.jsx' 
import Login from './Login/Login.jsx'
import SignUp from './Login/SignUp.jsx'

const Views = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route index element = {<Landingpage />} />
                <Route path="/landing" element={<Landingpage />} />
                <Route path="/profile" element={<Profilepage />} />
                <Route path="/search" element={<Searchpage />} />
                <Route path='/tutorial' element={<Tutorialpage />} />
                <Route path='/contact' element={<ContactUs />} />
                <Route path="*" element={<Landingpage/>} /> 
            </Routes>
        </BrowserRouter>
    ); 
};

export default Views