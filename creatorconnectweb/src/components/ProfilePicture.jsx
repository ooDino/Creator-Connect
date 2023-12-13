import '../index.css';
import React, { useEffect, useState } from 'react';
import { apiUpdateSelfUrl, apiUploadImage } from '../assets/apiconfig'

function ProfilePicture(props){

    // const[profilepicture, setprofilepicture] = useState(/*data from DB*/);
    // setprofilepicture(/*data from DB*/);

    // useEffect(() => {
    //     /* data from DB and render as html*/
    // }
    // , [profilepicture])

    const [imagefile, setImageFile] = useState(props.profilepicture);
    console.log('myprop', props);

    async function handleNewImage(imagedata){
        const file = imagedata.target.files[0]
        console.log(file);
        await handleUpdateImage(file);
    }

    async function handleImageClick(){
        document.getElementById('fileinput').click();
    }

    async function handleUpdateImage(imagefile){
        
        async function uploadImage(imagefile) {
            const formData = new FormData();
            formData.append('file', imagefile);

            const envelope = await fetch(apiUploadImage, {
              method: 'post',
              body: formData,
              credentials: 'include'});
            const data = envelope.status == 201 ? await envelope.json() : null;
            return data;
        }
        const uploadResult = await uploadImage(imagefile);
        const url = uploadResult.url;

        async function apiUpdateSelf(imageUrl) {
            const envelope = await fetch(apiUpdateSelfUrl, {
              method: 'put',   
               headers: { 
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({'avatar': imageUrl}),
              credentials: 'include'});
              const data = envelope.status == 200 ? await envelope.json() : null;
              return data;
          }
          await apiUpdateSelf(url);
          setImageFile(url);

    }

    

    return(
        <div class=" box-border border-white lg:min-h-[300px] lg:min-w-[300px] lg:max-w-[500px] lg:max-h-[400px] sm:w-full sm:h-[250px] border-[10px] rounded-2xl shadow-2xl bg-slate-200">
            {/* Profile Picture and Socials */}
            <div class="flex flex-col h-full w-full ">
                    <div class="flex flex-col justify-center items-center h-full w-full">
                        <div class="border-double border-[5px] rounded-full border-emerald-400 h-60 w-60 overflow-hidden bg-white">
                                <div class="h-full w-full">
                                    <button  class="bg-slate-500 h-full w-full hover:opacity-[90%] " onClick={handleImageClick}>
                                        <img src={imagefile || "/images/johndoe.png"}/>
                                    </button>
                                    <input class="w-[50px] h-[50px] pb-[60px]" id="fileinput" type="file" onChange={handleNewImage} accept="image/*"/>
                                </div>
                        </div>
                    </div>
                    <div class="flex justify-evenly w-full item-center pb-4">
                        {/* <button class="rounded-full bg-emerald-400 h-[30px] w-[40%]">Youtube</button>
                        <button class="rounded-full bg-emerald-400 h-[30px] w-[40%]">Save Changes</button> */}
                    </div>
            </div>
        </div>
    )
}

export default ProfilePicture;