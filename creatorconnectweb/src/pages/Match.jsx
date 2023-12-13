import Navbar from '../components/Navbar';
import MatchCards from '../components/MatchCards';
import Landingpage from './Landing';
import React, { useEffect, useState } from 'react';
import { apiUserList } from '../assets/apiconfig';
import '../index.css';

function Match(props){
    const { user } = props;
    if (!user) {
        return <Landingpage props />;
    }

    const [randnum, setRandnum] = useState(null);
    const [listlength, setListLength] = useState(null);

    function randomNumGen(max){
        const randomnum =  Math.floor(Math.random() * max);;
        setRandnum(randomnum);
    }

    const [currentdata, setCurrentData] = useState(0);
    const [display, setDisplay] = useState({});
    const [allusers, setAllUsers] = useState([]);
  
    async function generateUsers() {
      /// http://localhost:8080/user/generate?size=10
  
      // list of users
      const page = 0;
      const limit = 10;
      const name = ''; // `http://localhost:8080/user?page=${page}&limit=${limit}&name=whateveryournam`
      const tags = '' // `http://localhost:8080/user?page=${page}&limit=${limit}&tags[]=suerpman,batman`
  
      const listEnvelope = await fetch(`${apiUserList}?page=${page}&limit=${limit}`, {
        method: 'get',    
        // mode: 'no-cors',
        credentials: 'include'});
        const list = await listEnvelope.json();   //Has all users
      console.log('list users', list)
  
      const myuserdata = list;
      setListLength(allusers.length);
      setAllUsers(myuserdata);
      setDisplay(myuserdata[currentdata]);
    }
  
    useEffect(() => {
      generateUsers();
    },[currentdata])

  
    //fix
    function matchHandler(){
        console.log(listlength);
        // randomNumGen(listlength)
        // console.log("rand", randnum)
        
        // setRandnum(Math.floor(Math.random() * listlength));
        setCurrentData(3);
        setCurrentData(Math.floor(Math.random() * listlength));
    }
  


    return (
        <div>
            <Navbar user={props.user} logout={props.logout}/>
            <div class=" bg-gradient-to-b from-stone-950 from-10% via-slate-800 via-40% to-stone-950 to-90% h-screen">
                <div class="flex justify-center space evenly items-center h-full">
                    <button class="rounded-full h-[50px] w-[50px] bg-white hover:bg-slate-500 text-3xl ">{'<'}</button>             
                    <MatchCards name={display.name} bio={display.bio} avatar={display.avatar}/>
                    <button class="rounded-full h-[50px] w-[50px] bg-white hover:bg-slate-500 text-3xl" onClick={matchHandler}>{'>'}</button>
                </div>
            </div>
        </div>
      );
}

export default Match;