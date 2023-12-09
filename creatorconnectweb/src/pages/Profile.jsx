import Navbar from '../components/Navbar';
import ProfilePicture from '../components/ProfilePicture';
import ProfileTags from '../components/ProfileTags';
import NameBio from '../components/NameBio';
import DemoClips from '../components/DemoClips';

import '../index.css';

function Profilepage(){

    return (
        <div class="min-h-[2000px] min-w-[900px] h-screen w-screen overflow-hidden">
            <Navbar />
            <div class="bg-gradient-to-t from-violet-500 to-fuchsia-500 h-full w-full pt-[20px]">
                {/*My Profile Holder*/}
                <div class="flex justify-center item-center h-[50%] max-h-[1000px] w-full">
                    {/*My Profile Components */}
                    <div class="border border-4 grid grid-rows-3 grid-cols-3 grid-flow-row ">
                        <div class="border border-4 row-span-1 col-span-1">
                            <ProfilePicture />
                        </div>
                        <div class="border border-4 row-span-1 col-span-2">
                            <NameBio />
                        </div>
                        <div class="border border-4 row-span-1 col-span-3">
                            <ProfileTags />
                        </div>
                        <div class="border border-4 row-span-1 col-span-3">
                            <DemoClips />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Profilepage;