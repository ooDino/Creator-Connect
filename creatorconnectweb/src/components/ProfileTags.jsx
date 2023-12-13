import Tag from './Tag';
import React, { useEffect, useState } from 'react';
import { apiUpdateSelfUrl } from '../assets/apiconfig'


import '../index.css';

function ProfileTags(props){


    const [tags, setTags] = useState(props.taglist);
    const [addedtag, setAddedTag] = useState('');
    const [editable, setEditable] = useState(false);


    function handleSelection(selection){
        setAddedTag(selection.target.value);
    }

    async function updateTag(tag){
        console.log('hello', tags);
        
        console.log('tagtoupdate', tag);
        async function apiUpdateSelf(tag) {
            tags.push(tag || []);
            const uniquetags = [...new Set(tags)].filter((t) => t);
            console.log("originaludpate:" , uniquetags);
            // avatar?: string;
            // firstName?: string;
            // tags?: string[];
            // bio?: string;
            const envelope = await fetch(apiUpdateSelfUrl, {
              method: 'put',   
               headers: { 
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({'tags': uniquetags}),
              credentials: 'include'});
              const data = envelope.status == 200 ? await envelope.json() : null;
              setTags(uniquetags);
              return data;
          }
          await apiUpdateSelf(tag);
          console.log("updated");
          setEditable(false);

    }

    useEffect(() => {
        console.log(addedtag)
        updateTag(addedtag);
    },[addedtag])

    
    function handleClick(){
        setEditable(false);
    }


    function handleClicknotEditable(){
        setEditable(true);
    }

    const possibletags = [
        {label: "Exploring", value:'Exploring'},
        {label: "Cartoons", value:'Cartoons'},
        {label: "Games", value:'Games'},
        {label: "Vlogs", value:'Vlogs'},
        {label: "Animation", value:'Animation'},
        {label: "Drawing", value:'Drawing'},
    ]

    
    return(
        <div class="  box-border border-white min-h-[300px] min-w-[300px] w-[900px] max-h-[400px] border-[10px] rounded-2xl shadow-2xl bg-slate-200">
            {/* Name and Bio */}
            <div class="flex flex-col h-full w-full px-[15px] ">
                    <div class="flex justify-start h-[50%] w-full font-bold text-4xl pt-[50px] bg-slate-200 ">
                        Tags
                    </div>
                    <div class="flex flex-flow-row justify-start w-full h-[50%] w-full py-6 text-lg text-ellipsis overflow-hidden bg-slate-200">
                      {
                          // useEffect(() => {
                          //   tags.map((tag) => (<Tag tagname={tag}/>))
                          // }, [tags])
                          tags.map((tag) => (<Tag tagname={tag}/>))
                      }
                      {
                      (editable)? 
                      (
                        <div>
                            <button class="ml-[10px] mt-[10px] rounded-full h-[30px] w-[30px] bg-white text-md " onClick={handleClick} >
                                +
                            </button>
                            <select class="w-[100px]"onChange= {handleSelection}>
                                {possibletags.map(tag => (
                                    <option value={tag.value}>{tag.label}</option>
                                ))}
                            </select>
                        </div>
                      ) : 
                      
                      (
                        <button class="ml-[10px] mt-[10px] rounded-full h-[30px] w-[30px] bg-white text-md " onClick={handleClicknotEditable} >
                            +
                        </button>
                      )
                    }
                    </div>
            </div>
        </div>
    )
}

export default ProfileTags;