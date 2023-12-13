import '../index.css';
import { useState , useEffect} from 'react'
import { apiUpdateSelfUrl } from '../assets/apiconfig'

function NameBio(props){

    
    // const[name, setName] = useState(props.username);
    // const[bio, setBio] = useState(props.userbio);
    // setBio(/*Form Info*/);
    // setName(/*Form Info*/)

    // useEffect(() => {
    //     /*Html change */
    // },[bio])

    // useEffect(() => {
    //     /*Html change */
    // },[name])

    const [editboolean, setEditboolean] = useState(false);
    const [myname, setMyName] = useState(props.name);
    const [mybio, setMyBio] = useState(props.bio);

    function handleEditBoolean(){
        setEditboolean(true);
    }

    async function handleEditBooleantoFalse(){   //Close Edit, so it saves using this
        console.log(myname);
        console.log(mybio);
        await updateName(myname, mybio);   //We update it in the
        setEditboolean(false);
    }
    

    function handleBioChange(text){
        setMyBio(text.target.value);
        console.log(text.target.value);
    }

    function handleNameChange(text){
        setMyName(text.target.value);
        console.log(text.target.value);
    }

    async function updateName(myname, mybio){
        async function apiUpdateSelf(name, bio) {
            // avatar?: string;
            // firstName?: string;
            // tags?: string[];
            // bio?: string;
            const envelope = await fetch(apiUpdateSelfUrl, {
              method: 'put',   
               headers: { 
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({'firstName': name, 'bio':bio}),
              credentials: 'include'});
              const data = envelope.status == 200 ? await envelope.json() : null;
              return data;
          }
          await apiUpdateSelf(myname, mybio);
          setEditboolean(false);

    }



    return(
        
        <div class="  box-border border-white lg:min-h-[300px] lg:min-w-[300px] lg:w-[600px] lg:max-h-[400px] sm:w-full sm:h-[250px] border-[10px] rounded-2xl shadow-2xl bg-slate-200">
            {/* Name and Bio */}
            {
            (editboolean) ? 
                        
            (<div class="flex flex-col h-full w-full px-[15px]">
                    <div class="flex justify-end ">
                        <button class="flex justify-end w-[30px] mt-[5px]" onClick={handleEditBooleantoFalse}>
                            <img src="/images/edit-button.png"/>
                        </button>
                    </div>
                    <div class="flex lg:justify-start sm:justify-center h-[50%] w-full font-bold text-4xl pt-[50px] bg-slate-200">
                        <textarea class="w-[50%] min-h-[50px] max-h-[50px] overflow-hidden" minlength="1" maxlength="20" onChange={handleNameChange}/>
                    </div>
                    <div class="flex lg:justify-start sm:justify-center w-full item-center h-[50%] w-full pb-6 text-lg text-ellipsis overflow-hidden bg-slate-200">
                        <textarea class="w-[70%] min-h-[70px] max-h-[70px] overflow-hidden" minlength="1" maxlength="100" onChange={handleBioChange}/>
                    </div>
            </div>)
            
            
            :             
            
            <div class="flex flex-col h-full w-full px-[15px]">
                    <div class="flex justify-end ">
                        <button class="flex justify-end w-[30px] mt-[5px]" onClick={handleEditBoolean}>
                            <img src="/images/edit-button.png"/>
                        </button>
                    </div>
                    <div class="flex justify-start h-[50%] w-full font-bold text-4xl pt-[50px] bg-slate-200">
                        {props.username}
                    </div>
                    <div class="flex justify-start w-full item-center h-[50%] w-full pb-6 text-lg text-ellipsis overflow-hidden bg-slate-200">
                        {props.userbio} 
                    </div>
            </div>
            }
        </div>
    )
}

export default NameBio;