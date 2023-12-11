import '../index.css';

function NameBio(props){
    return(
        <div class="  box-border border-white lg:min-h-[300px] lg:min-w-[300px] lg:w-[600px] lg:max-h-[400px] sm:w-full sm:h-[250px] border-[10px] rounded-2xl shadow-2xl bg-slate-200">
            {/* Name and Bio */}
            <div class="flex flex-col h-full w-full px-[15px]">
                    <div class="flex justify-start h-[50%] w-full font-bold text-4xl pt-[50px] bg-slate-200">
                        {props.username}
                    </div>
                    <div class="flex justify-start w-full item-center h-[50%] w-full pb-6 text-lg text-ellipsis overflow-hidden bg-slate-200">
                        {props.userbio}
                    </div>
            </div>
        </div>
    )
}

export default NameBio;