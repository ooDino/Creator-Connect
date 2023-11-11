import '../index.css';

function Navbar(){
    return (
        <nav className="navbar">
            <ul classname="navbarposition">
                <li><a href="landing">Home</a></li>
                <li><a href="profile">Profile</a></li>
                <li><a>Creator Create Connect</a></li>
                <li><a href="search">Explore</a></li>
                <li><a href="tutorial">Tutorial</a></li>
                <li><a href="contact">ContactUs</a></li>
            </ul>
        </nav>
      );
}

export default Navbar;