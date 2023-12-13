import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Landingpage from './Landing';
import '../index.css';

function Searchpage(props){

    const { user } = props;
    if (!user) {
        return <Landingpage props />;
    }

    return ( 
        <div>
            <Navbar user={props.user} logout={props.logout}/>
            <div class=" bg-gradient-to-b from-stone-950 from-10% via-slate-800 via-40% to-stone-950 to-90% h-screen">
                <Search />
            </div>
        </div>
      );
}

export default Searchpage;