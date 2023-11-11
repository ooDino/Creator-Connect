
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Landingpage from './pages/Landing.js'
import Profilepage from './pages/Profile.js'
import Searchpage from './pages/UserSearch.js'
import Tutorialpage from './pages/Tutorial.js'
import ContactUs from './pages/Contact.js'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Landingpage />} />
        <Route path="/landing" element={<Landingpage />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/search" element={<Searchpage />} />
        <Route path='/tutorial' element={<Tutorialpage />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
