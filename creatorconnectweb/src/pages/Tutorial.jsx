import Navbar from '../components/Navbar';
import '../index.css';

function Tutorialpage(props){
    return (
        <div>
            <Navbar user={props.user} logout={props.logout}/>
            <div class='bg-gradient-to-b from-stone-950 from-10% via-slate-800 via-40% to-stone-950 to-90% h-screen overflow-hidden'>
                <div class="box-border shadow-xl h-96 w-auto items-center border-4 text-white">
                    <div class=" h-50" >
                        <div class="flex justify-center mt-20 columns-2">
                            <div class="flex flex-col space-y-10 text-center tracking-widest">
                                <div class="text-6xl">Tutorial</div>
                                <div class="text-2xl">Learn About the features</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
      );
}

export default Tutorialpage;