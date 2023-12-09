import '../index.css';
import UserDisplay from './UserDisplay.jsx'; 

function Search() {
  return (
    <div className="flex flex-col box-border h-full w-full pt-10 ">
      <div className="flex box-border h-[50px] w-full justify-center text-white text-3xl">
        Search:
        <div className="flex rounded-full bg-white h-11 w-4/6 border-double border-4 border-cyan-400 mx-5 px-5 text-black outline-none">
          <form className="w-[300px]">
            <input className="w-full sm:w-80" placeholder="Search User . . ." />
          </form>
        </div>
      </div>

      <UserDisplay
        username="john_doe"
        fullName="John Doe"
        profileImage="/images/johndoe.png"
        subscriberCount={1000}
        bio="World class chef creating the most delicious meals imaginable and sharing exquisite recipes!"
      />
      <UserDisplay
        username="jane_doe"
        fullName="Jane Doe"
        profileImage="/images/johndoe.png"
        subscriberCount={-2}
        bio="Error 404 i liek to eat beeg p1zz@ and larg milkshek."
      />

      <UserDisplay
        username="jake_doe"
        fullName="Jake Doe"
        profileImage="/images/johndoe.png"
        subscriberCount={69420}
        bio="Professional Call of Warfare eSports player rank #1 NA."
      />
    </div>
  );
  
}

export default Search;