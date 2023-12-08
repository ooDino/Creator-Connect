import '../index.css';

function ProfilePicture(){
    return(
        <div class=" box-border border-white min-h-[300px] min-w-[300px] max-w-[500px] max-h-[400px] border-[10px] rounded-2xl shadow-2xl bg-slate-200">
            {/* Profile Picture and Socials */}
            <div class="flex flex-col h-full w-full">
                    <div class="flex flex-col justify-center items-center h-full w-full">
                        <div class="border-double border-[5px] rounded-full border-emerald-400 h-60 w-60 overflow-hidden bg-white">
                                <div class="bg-black h-full w-full">
                                    {/*This will have profile picture upload*/}
                                </div>
                        </div>
                    </div>
                    <div class="flex justify-evenly w-full item-center pb-4">
                        <button class="rounded-full bg-emerald-400 h-[30px] w-[40%]">Youtube</button>
                        <button class="rounded-full bg-emerald-400 h-[30px] w-[40%]">Save Changes</button>
                    </div>
            </div>
        </div>
    )
}

export default ProfilePicture;