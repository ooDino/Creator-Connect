import '../index.css';

function NameBio(){
    return(
        <div class="  box-border border-white min-h-[300px] min-w-[300px] w-[600px] max-h-[400px] border-[10px] rounded-2xl shadow-2xl bg-slate-200">
            {/* Name and Bio */}
            <div class="flex flex-col h-full w-full px-[15px]">
                    <div class="flex justify-start h-[50%] w-full font-bold text-4xl pt-[50px] bg-slate-200">
                        Name
                    </div>
                    <div class="flex justify-start w-full item-center h-[50%] w-full pb-6 text-lg text-ellipsis overflow-hidden bg-slate-200">
                        Hello my name is Blank, as of right now I do not have a biography, this is just a place holder
                    </div>
            </div>
        </div>
    )
}

export default NameBio;