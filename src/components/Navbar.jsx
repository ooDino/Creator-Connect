import '../index.css';

function Navbar(){
    return (
        <nav class="bg-gray-950 ">
            <div>
                <div class="grow h-5 w-auto">
                    <a class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md flex justify-center mt- px-3 py-2 text-3xl font-heavy">
                        Creator Create Connect
                    </a>
                </div>
            </div>
            <ul class="relative flex h-30 mx-auto justify-between">
                <div class="relative flex items-center my-5 mx-5">
                    <li class="defaultbut"><a href="landing">Home</a></li>
                    <li class="defaultbut"><a href="profile">Profile</a></li>    
                </div>
                <div class="flex items-center my-5 float-right">
                    <li class="defaultbut"><a href="search">Explore</a></li>
                    <li class="defaultbut"><a href="tutorial">Tutorial</a></li>
                    <li class="defaultbut"><a href="contact">Contact Us</a></li>        
                </div>
            </ul>
        </nav>
      );
}

export default Navbar;