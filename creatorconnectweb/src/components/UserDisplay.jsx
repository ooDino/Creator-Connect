import '../index.css';


const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function UserDisplay({ username, fullName, profileImage, subscriberCount, bio, tags }) {
  return (
    <div className="max-w-md mx-auto my-5 box-border border-white w-[600px] h-[300px] border-[10px] rounded-2xl shadow-2xl bg-slate-200">
      <div className="flex items-center flex-col h-full">
        <div className="flex flex-col flex-grow">
          <div className="flex items-start">
            <img
              src={profileImage}
              alt={`${username}'s profile`}
              className="rounded-full h-16 w-16 object-cover mr-4"
            />
            <div>
              <h3 className="text-xl font-medium">{fullName}</h3>
              <p className="text-gray-600">@{username}</p>
              <p className="text-gray-500">Subscribers: {subscriberCount}</p>
            </div>
          </div>
          <p className="text-gray-700 px-4">{bio}</p>
        </div>
        <div className="mt-auto p-4">
          <div className="flex space-x-2">
            {tags &&
              tags.map((tag, index) => (
                <div
                  key={index}
                  className="rounded-full text-white bg-[randomColor] px-2 py-1"
                  style={{ backgroundColor: getRandomColor() }}
                >
                  {tag}
                </div>
              ))}
          </div>
          <div className="flex space-x-4 mt-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Message</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">Block</button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">♥</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDisplay;