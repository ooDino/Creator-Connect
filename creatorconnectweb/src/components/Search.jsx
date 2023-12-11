import '../index.css';
import React, { useState } from 'react';
import UserDisplay from './UserDisplay.jsx';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const users = [
    {
      username: "john_doe",
      fullName: "John Doe",
      profileImage: "/images/johndoe.png",
      subscriberCount: 1000,
      bio: "World class chef creating the most delicious meals imaginable and sharing exquisite recipes!",
      tags: ["Chef", "Foodie", "Recipes"],
    },
    {
      username: "jane_doe",
      fullName: "Jane Doe",
      profileImage: "/images/johndoe.png",
      subscriberCount: -2,
      bio: "Error 404 I like to eat big pizza and large milkshakes.",
      tags: ["Pizza Lover", "Milkshake Enthusiast"],
    },
    {
      username: "jake_doe",
      fullName: "Jake Doe",
      profileImage: "/images/johndoe.png",
      subscriberCount: 69420,
      bio: "Professional Call of Warfare eSports player rank #1 NA.",
      tags: ["eSports", "Gamer", "Top 1 NA"],
    },
  ];

  const handleSearch = () => {
    
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSelectedTags([]);
  };

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags((prevTags) => prevTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags((prevTags) => [...prevTags, tag]);
    }
  };

  const filteredUsers = users.filter((user) => {
    if (selectedTags.length === 0) {
      return true;
    }
    return user.tags.some((userTag) => selectedTags.includes(userTag));
  });

  return (
    <div className="flex flex-col box-border h-full w-full pt-10">
      <div className="flex box-border h-[50px] w-full justify-center text-white text-2xl">
        Search:
        <div className="flex rounded-full bg-white h-11 w-5/6 border-double border-4 border-cyan-400 mx-5 px-5 text-black outline-none">
          <form className="w-full">
            <input
              size="40"
              className="flex pr-[-500px] border-none w-[1000px] sm:w-80"
              placeholder="Search User . . ."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
        <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleSearch}>
          Search
        </button>
        <button className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-md" onClick={clearSearch}>
          Clear
        </button>
      </div>

      <div className="flex space-x-2 my-2">
        {selectedTags.map((tag) => (
          <div key={tag} className="rounded-full text-white px-2 py-1" style={{ backgroundColor: 'blue' }}>
            {tag}
          </div>
        ))}
      </div>

      <div className="flex space-x-2 my-2">
        {['Chef', 'Foodie', 'Gamer', 'eSports', 'Pizza Lover', 'Milkshake Enthusiast'].map((tag) => (
          <button
            key={tag}
            className={`bg-blue-500 text-white px-4 py-2 rounded-md ${selectedTags.includes(tag) && 'bg-opacity-50'}`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="flex flex-col">
        {filteredUsers.map((user, index) => (
          <UserDisplay key={index} {...user} />
        ))}
      </div>
    </div>
  );
}

export default Search;
