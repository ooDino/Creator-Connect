import Navbar from '../components/Navbar';
import Search from '../components/Search';
import '../index.css';

function Searchpage(){
    return (
        <div>
            <Navbar />
            <div class="bg-gradient-to-t from-violet-500 to-fuchsia-500 h-screen">
                <Search />
            </div>
        </div>
      );
}

export default Searchpage;