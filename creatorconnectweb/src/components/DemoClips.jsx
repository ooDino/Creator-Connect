import '../index.css';

function DemoClips(props){

    return(
        <div class="  box-border border-white min-h-[300px] min-w-[300px] w-[900px] max-h-[400px] border-[10px] rounded-2xl shadow-2xl bg-slate-200">
            <div class="flex flex-col h-full w-full px-[15px]">
                    <div class="flex justify-start h-[50%] w-full font-bold text-4xl pt-[20px] bg-slate-200">
                        Clips
                    </div>
                    <div class="flex justify-start w-full item-center h-[50%] w-full pb-6 text-lg text-ellipsis overflow-hidden bg-slate-200">
                        Here are the clips
                    </div>
                    <div class="flex flex-flow-row justify-evenly">
                        <div class="bg-slate-800 h-[150px] w-[250px]">
                        <iframe class="w-full"src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                        </div>
                        <div class="bg-slate-800 h-[150px] w-[250px]">
                        <iframe class="w-full"src="https://www.youtube.com/embed/YSxesqXFeQE"></iframe>
                        </div>
                        <div class="bg-slate-800 h-[150px] w-[250px]">
                            
                        </div>
                    </div>
            </div>
        </div>
    )

}

export default DemoClips;