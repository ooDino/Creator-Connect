import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Landingpage from './pages/Landing.jsx'
import Profilepage from './pages/Profile.jsx'
import Searchpage from './pages/UserSearch.jsx'
import Tutorialpage from './pages/Tutorial.jsx'
import ContactUs from './pages/Contact.jsx'

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
