import '../index.css';
import React, { useEffect, useState } from 'react';
import { apiOauth } from '../assets/apiconfig';



function Navbar({ user, logout }){
    // console.log('mav', user, logout)
    // const [user, setUser] = useState(null);
    // const [loggedin, setLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
    // const navigate = useNavigate();


    // function redirect(user){
    //     if(!user){
    //         navigate('/landing');
    //     }
    // }



    // async function handleLogout(){
    //     const logoutfetch = await fetch("http://localhost:8080/oauth/logout", {
    //         method: 'get',    
    //         // mode: 'no-cors',
    //         credentials: 'include'});

    //     // console.log("logout")
    //     // setLoggedIn(false);
    //     // setUser(null);
    //     // localStorage.removeItem('isLoggedIn');
    //     // localStorage.removeItem('user');
    //     navigate('/landing');
    // }

    // function handleLogin(user){
    //     setLoggedIn(true);
    //     localStorage.setItem('isLoggedIn', true);
    //     const data = JSON.stringify(user);
    //     localStorage.setItem('user', data);
    // }

    // useEffect(() => {
    //     async function validateLogin() {
    //         // user
    //         const envelope = await fetch("http://localhost:8080/user/self", {
    //         method: 'get',    
    //         // mode: 'no-cors',
    //         credentials: 'include'});
            
            
    //         console.log('ev', envelope)
    //         const user = envelope.status == 200 ? await envelope.json() : null
    //         console.log('user', user)
    //         setUser(user);
            
    //         if(user){
    //             handleLogin(user);
    //             console.log("Logged In")
    //         }


    //         // generate users, paste in browser
    //         /// http://localhost:8080/user/generate?size=10

    //         // list of users
    //         const page = 0;
    //         const limit = 10;
    //         const listEnvelope = await fetch(`http://localhost:8080/user?page=${page}&limit=${limit}`, {
    //         method: 'get',    
    //         // mode: 'no-cors',
    //         credentials: 'include'});
    //         console.log('list users', await listEnvelope.json())

            
    //     }
    //     validateLogin();
    // },[])
    
    // user = false;
    // loggedIn(user);

    // async function loggedIn(){
    //     const res = await fetch("http://localhost:8080/user/self");
    //     const loggedIn = res.status == 200? await res.json(): null;
    
    //     console.log('loggedin', loggedIn);
    // }

    if(user){
        return(
            <nav class="bg-gray-950 font-mygasoek tracking-wide">
            <div>
                <div class="grow h-5 w-auto">
                    <a class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md flex justify-center mt- px-3 py-2 text-3xl font-heavy ">
                        Creator Create Connect
                    </a>
                </div>
            </div>
            <ul class="relative flex h-30 mx-auto justify-between">
                <div class="relative flex items-center my-5 mx-5">
                    <li class="defaultbut"><a href="/">Home</a></li>
                    <li class="defaultbut"><a href="/profile">Profile</a></li>
                    <li class="defaultbut"><a href="/match">Match</a></li>  
                </div>
                <div class="flex items-center my-5 float-right">
                    <li class="defaultbut"><a href="/search">Explore</a></li>
                    <li class="defaultbut"><a href="/tutorial">Tutorial</a></li>
                    <li class="defaultbut"><button onClick={logout}>Log out</button></li>        
                </div>
            </ul>
            </nav>
        )
    }

    else{
        return(
            <nav class="bg-gray-950 font-mygasoek tracking-wide">
            <div>
                <div class="grow h-5 w-auto">
                    <a class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md flex justify-center px-3 py-2 text-3xl font-heavy ">
                        Creator Create Connect
                    </a>
                </div>
            </div>
            <ul class="relative flex h-30 mx-auto justify-between">
                <div class="relative flex items-center my-5 mx-5">
                    <li class="defaultbut"><a href="/">Home</a></li>
                </div>
                <div class="flex items-center my-5 float-right">
                    <li class="defaultbut"><a href={apiOauth}>Log In</a></li>
                    <li class="defaultbut"><a href="/contact">Contact Us</a></li>        
                </div>
            </ul>
            </nav>
        )
    }

}
export default Navbar;