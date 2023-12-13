import { BrowserRouter , Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { apiUpdateSelfUrl, apiLogoutUrl, apiGetUserUrl } from './assets/apiconfig.jsx'
import Landingpage from './pages/Landing.jsx'
import Profilepage from './pages/Profile.jsx'
import Searchpage from './pages/UserSearch.jsx'
import Tutorialpage from './pages/Tutorial.jsx'
import ContactUs from './pages/Contact.jsx'
import MatchPage from './pages/Match.jsx'

async function apiGetCurrentUser() {
  const envelope = await fetch(apiGetUserUrl, {
    method: 'get',    
    credentials: 'include'});
    const user = envelope.status == 200 ? await envelope.json() : null;
    return user;
}
// async function apiUpdateSelf(body) {
//   // avatar?: string;
//   // firstName?: string;
//   // tags?: string[];
//   // bio?: string;
//   const envelope = await fetch(apiGetUserUrl, {
//     method: 'put',    
//     body: JSON.stringify(body),
//     credentials: 'include'});
//     const data = envelope.status == 200 ? await envelope.json() : null;
//     return data;
// }

async function apiLogout() {
  const logoutfetch = await fetch(apiLogoutUrl, {
      method: 'get',    
      // mode: 'no-cors',
      credentials: 'include'});
}

function App() {

  const[user, setUser] = useState(null);
  useEffect(() => {
    async function initUserData() {
      const user = await apiGetCurrentUser();
      setUser(user);
      // console.log("App()", 'setUser:', user)
    }
    initUserData();
  },[])

  const logout = async () =>  {
    await apiLogout();
    setUser(null);
  }

  /**
   * handleLogout(){
        const logoutfetch = await fetch("http://localhost:8080/oauth/logout", {
            method: 'get',    
            // mode: 'no-cors',
            credentials: 'include'});

        console.log("logout")
        setLoggedIn(false);
        setUser(null);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
        navigate('/landing');
    }

    function handleLogin(user){
        setLoggedIn(true);
        localStorage.setItem('isLoggedIn', true);
        const data = JSON.stringify(user);
        localStorage.setItem('user', data);
    }

    useEffect(() => {
        async function validateLogin() {
            // user
            const envelope = await fetch("http://localhost:8080/user/self", {
            method: 'get',    
            // mode: 'no-cors',
            credentials: 'include'});
            
            
            console.log('ev', envelope)
            const user = envelope.status == 200 ? await envelope.json() : null
            console.log('user', user)
            setUser(user);
            
            if(user){
                handleLogin(user);
                console.log("Logged In")
            }


            // generate users, paste in browser
            /// http://localhost:8080/user/generate?size=10

            // list of users
            const page = 0;
            const limit = 10;
            const listEnvelope = await fetch(`http://localhost:8080/user?page=${page}&limit=${limit}`, {
            method: 'get',    
            // mode: 'no-cors',
            credentials: 'include'});
            console.log('list users', await listEnvelope.json())

            
        }
        validateLogin();
    },[])
   */
    // console.log('routes: ' + (user? "/profile": "/landing"));
    // console.log('routes: ' + (user? "/search": "/landing"));
    // console.log('routes: ' + (user? '/tutorial': "/landing"));
    // console.log('routes: ' + (user? '/contact': "/landing"));
    // console.log('routes: ' + (user? '/match': "/landing"));

    console.log("app" , user);
  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Landingpage user={user} logout={logout}/>} />
        <Route path="/" element={<Landingpage user={user} logout={logout}/>} />
        <Route path="/tutorial" element={<Tutorialpage user={user} logout={logout}/>} />
        <Route path="/contact" element={<ContactUs user={user} logout={logout}/>} />
        {/* <Route element={<ProtectedRoutes user={user}/>}> */}
          <Route path="/profile" element={<Profilepage user={user} logout={logout}/>} />
          <Route path="/search" element={<Searchpage user={user} logout={logout}/>} />
          <Route path="/match" element={<MatchPage user={user} logout={logout}/>} />
        {/* </Route> */}
      </Routes>
      </BrowserRouter>
      // <BrowserRouter>
      //   <Routes>
      //     <Route index element = {<Landingpage />} />
      //     <Route path="/landing" element={<Landingpage user={user} logout={logout}/>} />
      //     <Route path={"/tutorial"} element={<Tutorialpage user={user} logout={logout} />} />
      //     <Route path={"/contact"} element={<ContactUs user={user} logout={logout} />} />

      //     (user? <Route path={"/profile"} element={<Profilepage user={user} logout={logout} />} />: <Route path={"/profile"} element={<Navigate to='/landing' />} /> )
      //     (user? <Route path={"/search"} element={<Searchpage user={user} logout={logout} />} />: <Route path={"/search"} element={<Navigate to='/landing' />} /> )
      //     (user? <Route path={"/match"} element={<MatchPage user={user} logout={logout} />} />: <Route path={"/match"} element={<Navigate to='/landing' />} /> )
      //   </Routes>
      // </BrowserRouter>
  );
}

export default App;
