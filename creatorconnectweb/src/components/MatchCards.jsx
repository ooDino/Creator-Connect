import '../index.css';

function MatchCards(props){

    return(
        <div class=" box-border border-white w-[400px] h-[500px] border-[10px] rounded-2xl shadow-2xl bg-slate-200">
            {/* Profile Picture and Socials */}
            <div class="flex flex-col h-full w-full ">
                    <div class="flex flex-col items-center h-full w-full pt-[20px]">
                        <div class="border-double border-[5px] rounded-full border-emerald-400 h-60 w-60 overflow-hidden bg-white">
                                <div class="bg-black h-full w-full">
                                    <img src={props.avatar} alt="No Image"/>
                                </div>
                        </div>
                        <div class="flex justify-evenly w-full item-center text-3xl">
                            {props.name}
                        </div>
                        <div class="flex justify-evenly w-full item-center">
                            <p class=" whitespace-break-spaces text-center overflow-hidden truncate text-sm">
                                {props.bio}
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-evenly w-full item-center ">
                            <button class=" hover:bg-emerald-200 rounded-full bg-emerald-400 h-[30px] w-[40%] mb-[50px]">Match</button>
                    </div>

            </div>
        </div>
    )

}

export default MatchCards;