import Navbar from '../components/Navbar';
import MatchCards from '../components/MatchCards';
import '../index.css';

function Match(){
    return (
        <div>
            <Navbar />
            <div class=" bg-gradient-to-b from-stone-950 from-10% via-slate-800 via-40% to-stone-950 to-90% h-screen">
                <div class="flex justify-center space evenly items-center h-full">
                    <button class="rounded-full h-[50px] w-[50px] bg-white hover:bg-slate-500 text-3xl ">{'<'}</button>             
                    <MatchCards />
                    <MatchCards />
                    <MatchCards />
                    <button class="rounded-full h-[50px] w-[50px] bg-white hover:bg-slate-500 text-3xl ">{'>'}</button>
                </div>
            </div>
        </div>
      );
}

export default Match;