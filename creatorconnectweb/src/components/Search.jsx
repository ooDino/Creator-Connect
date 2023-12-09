import '../index.css';

function Search(){
    return(
        <div class="flex flex-col box-border h-full w-full pt-10">
            <div class="flex box-border h-[50px] w-full justify-center text-white text-3xl">
                Search :
                <div class="flex rounded-full bg-white h-11 w-4/6 border-double border-4 border-cyan-400 mx-5 px-5 text-black outline-none">
                    <form class="w-[300px]">
                        <input className="w-full sm:w-80" placeholder="Search User . . ." />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search;