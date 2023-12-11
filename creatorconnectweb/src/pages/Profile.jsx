import Navbar from '../components/Navbar';
import ProfilePicture from '../components/ProfilePicture';
import ProfileTags from '../components/ProfileTags';
import NameBio from '../components/NameBio';
import DemoClips from '../components/DemoClips';
import user from '../assets/data.json'

import '../index.css';

function Profilepage(){
    const myjsondata = {
        "user":{
            "name": "Jimmy",
            "bio": "Hey Buddy myname is jimmy232421",
            "tags": ["Anime","Cartoons","Drawing","Streamer","Youtuber"],
            "videos": ["https://www.youtube.com/embed/tgbNymZ7vqY","https://www.youtube.com/embed/YSxesqXFeQE"]
        }
    }
    const name= myjsondata.user.name;
    const bio = myjsondata.user.bio;
    const tags = myjsondata.user.tags;
    console.log(tags);
    return (
        <div class="min-h-[2000px] min-w-[900px] h-screen w-screen overflow-hidden">
            <Navbar />
            <div class="flex bg-gradient-to-b from-stone-950 from-10% via-slate-800 via-40% to-stone-950 to-90% h-full w-full pt-[20px] justify-between">
                
                <div class="bg-star-pattern h-full lg:w-[20%] mt-[-20px] sm:w-[0%] bg-white">
                    
                </div>
                {/*My Profile Holder*/}
                <div class="flex justify-center item-center h-[50%] max-h-[1000px] w-full">
                    {/*My Profile Components */}
                    <div class="border border-4 grid lg:grid-rows-3 lg:grid-cols-3 lg:grid-flow-row md:grid-rows-4 md:grid-cols-1 sm:grid-rows-4 sm:grid-cols-1 ">
                        <div class="border border-4 lg:row-span-1 lg:col-span-1 md:row-span-1 md:col-span-1 sm:row-span-1 sm:col-span-1 sm:flex sm:justify-center ">
                            <ProfilePicture/>
                        </div>
                        <div class="border border-4 lg:row-span-1 lg:col-span-2 md:row-span-1 md:col-span-1 sm:row-span-1 sm:col-span-1 sm:flex sm:justify-center ">
                            <NameBio username={name} userbio={bio}/>
                        </div>
                        <div class="border border-4 lg:row-span-1 lg:col-span-3 md:row-span-1 md:col-span-1 sm:row-span-1 sm:col-span-1 sm:flex sm:justify-center ">
                            <ProfileTags taglist={tags}/>
                        </div>
                        <div class="border border-4 lg:row-span-1 lg:col-span-3 md:row-span-1 md:col-span-1 sm:row-span-1 sm:col-span-1 sm:flex sm:justify-center ">
                            <DemoClips />
                        </div>
                    </div>
                </div>

                <div class="bg-star-pattern h-full lg:w-[20%] mt-[-20px] sm:w-[0%] bg-white">
                    a
                </div>
            </div>
        </div>
      );
}

export default Profilepage;