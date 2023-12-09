import Tag from './Tag';

import '../index.css';

function ProfileTags(){

    function returnTags(tagdata){
        const mytagdata = JSON.parse(tagdata);
        /* In here we loop through the json provided by the DB */
    }


    return(
        <div class="  box-border border-white min-h-[300px] min-w-[300px] w-[900px] max-h-[400px] border-[10px] rounded-2xl shadow-2xl bg-slate-200">
            {/* Name and Bio */}
            <div class="flex flex-col h-full w-full px-[15px]">
                    <div class="flex justify-start h-[50%] w-full font-bold text-4xl pt-[50px] bg-slate-200">
                        Tags
                    </div>
                    <div class="flex flex-flow-row justify-start w-full item-center h-[50%] w-full py-6 text-lg text-ellipsis overflow-hidden bg-slate-200">
                        <Tag />
                        <Tag />
                        <Tag />
                        <Tag />
                        <Tag />
                    </div>
            </div>
        </div>
    )
}

export default ProfileTags;