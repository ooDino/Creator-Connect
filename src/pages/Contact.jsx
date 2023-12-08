import Navbar from '../components/Navbar'
import '../index.css';

function ContactUs(){
    return(
        <div>
            <Navbar />
            <div class="bg-gradient-to-t from-violet-500 to-fuchsia-500 h-screen">
            </div>
            <h1>This is the Contact Page</h1>
            <div class="box-content h-30 w-30  border-4">
                Hello this is my background
            </div>
        </div>
    );
}

export default ContactUs;