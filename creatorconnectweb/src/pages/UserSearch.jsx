import Navbar from '../components/Navbar';
import Search from '../components/Search';
import '../index.css';

function Searchpage(){
    return (
        <div>
            <Navbar />
            <div class=" bg-gradient-to-b from-stone-950 from-10% via-slate-800 via-40% to-stone-950 to-90% h-screen">
                <Search />
            </div>
        </div>
      );
}

export default Searchpage;