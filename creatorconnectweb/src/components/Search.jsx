import '../index.css';
import UserDisplay from './UserDisplay.jsx';
import React, { useEffect, useState } from 'react';
import { apiUserList } from '../assets/apiconfig.jsx';

function Search(props) {

  const [search, setSearch] = useState("")
  const [allusers, setAllUsers] = useState();

  async function generateUsers() {
    /// http://localhost:8080/user/generate?size=10

    // list of users
    const page = 0;
    const limit = 5;
    const name = ''; // `http://localhost:8080/user?page=${page}&limit=${limit}&name=whateveryournam`
    const tags = '' // `http://localhost:8080/user?page=${page}&limit=${limit}&tags[]=suerpman,batman`

    const listEnvelope = await fetch(`${apiUserList}?page=${page}&limit=${limit}`, {
      method: 'get',    
      // mode: 'no-cors',
      credentials: 'include'});
      const list = await listEnvelope.json();   //Has all users
    console.log('list users', list)

    const myuserdata = list;
    const filteredlist = [];  

    list.map((foreignUserData) => {
      console.log('search', search, foreignUserData.name, foreignUserData.name == search);
      if(search == ""){
        filteredlist.push(foreignUserData)
      }
      else{
        if (foreignUserData.name == search){
          filteredlist.push(foreignUserData)
        }
      }
    })

    console.log(filteredlist);
    setAllUsers(filteredlist);
  }

  useEffect(() => {
    generateUsers();
    console.log(search)
  },[search])

  function generationHandler(text){
    setSearch(text.target.value);
    generateUsers(text.target.value);
  }

  return (
    <div className="flex flex-col box-border h-full w-full pt-10 ">
      <div className="flex box-border h-[50px] w-full justify-center text-white text-2xl">
        Search:
        <div className="flex rounded-full bg-white h-11 w-5/6 border-double border-4 border-cyan-400 mx-5 px-5 text-black outline-none">
          <form className="w-full">
            <textarea type="text" onChange={generationHandler} size="40" class="border-hidden border-w-[0px] w-[100%] min-h-[35px] max-h-[35px] overflow-hidden" placeholder="Search User . . ." />
          </form>
        </div>
      </div>

      {
      (allusers || []).map((d) => { return(
        <UserDisplay
          username={d.name}
          fullName={d.name}
          profileImage={d.avatar}
          subscriberCount={1000}
          bio={d.bio}
        />
      )
      })
      }

      {/* {
      (allusers || []).map((d) => {
        <UserDisplay
          username={d.name}
          fullName={d.name}
          profileImage={d.avatar}
          subscriberCount={1000}
          bio={d.bio}
        />
      })
      } */}

      {/* <UserDisplay
        username="john_doe"
        fullName="John Doe"
        profileImage="/images/johndoe.png"
        subscriberCount={1000}
        bio="World class chef creating the most delicious meals imaginable and sharing exquisite recipes!"
      />
      <UserDisplay
        username="jane_doe"
        fullName="Jane Doe"
        profileImage="/images/johndoe.png"
        subscriberCount={-2}
        bio="Error 404 i liek to eat beeg p1zz@ and larg milkshek."
      />

      <UserDisplay
        username="jake_doe"
        fullName="Jake Doe"
        profileImage="/images/johndoe.png"
        subscriberCount={69420}
        bio="Professional Call of Warfare eSports player rank #1 NA."
      /> */}
    </div>
  );
  
}

export default Search;