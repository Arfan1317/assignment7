import { useState, useEffect } from "react";
import { Link } from "react-router"; 

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("/friends.json")
        .then((response) => response.json())
        .then((data) => {
          setFriends(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error loading friends:", error));
    }, 600);
  }, []);

  const totalFriends = friends.length;
  const onTrack = loading ? 0 : friends.filter((f) => f.status === "on-track").length;
  const needAttention = loading ? 0 : friends.filter((f) => f.status !== "on-track").length;

  const getStatusColor = (status) => {
    switch (status) {
      case "overdue":
        return "bg-[#EF4444] text-white"; 
      case "almost due":
        return "bg-[#F59E0B] text-white"; 
      case "on-track":
        return "bg-[#2A5C43] text-white"; 
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <div className="max-w-[1110px] mx-auto px-4 sm:px-6 py-12">
      
      <div className="text-center space-y-3 mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1e293b] tracking-tight">
          Friends to keep close in your life
        </h1>
        <p className="text-[#64748b] text-[15px] md:text-base max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the
          relationships that matter most.
        </p>
        <div className="pt-2">
          <button className="bg-[#2A5C43] hover:bg-[#1f4532] text-white px-5 py-2.5 rounded-md font-medium transition-colors duration-200 inline-flex items-center gap-2 shadow-sm hover:shadow-md">
            <span className="text-xl leading-none font-light mb-[2px]">+</span> Add a Friend
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
        
        <div className="bg-white rounded-xl p-6 md:py-8 text-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-[40px] leading-none font-bold text-[#2A5C43] mb-2">{loading ? "-" : totalFriends}</h3>
          <p className="text-[15px] text-[#64748b]">Total Friends</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 md:py-8 text-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-[40px] leading-none font-bold text-[#2A5C43] mb-2">{loading ? "-" : onTrack}</h3>
          <p className="text-[15px] text-[#64748b]">On Track</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 md:py-8 text-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-[40px] leading-none font-bold text-[#2A5C43] mb-2">{loading ? "-" : needAttention}</h3>
          <p className="text-[15px] text-[#64748b]">Need Attention</p>
        </div>
        
        <div className="bg-white rounded-xl p-6 md:py-8 text-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        
          <h3 className="text-[40px] leading-none font-bold text-[#2A5C43] mb-2">12</h3>
          <p className="text-[15px] text-[#64748b]">Interactions This Month</p>
        </div>

      </div>

     
      <div>
        <h2 className="text-[22px] font-bold text-[#1e293b] mb-6">Your Friends</h2>
        
        {loading ? (
          <div className="flex flex-col justify-center items-center py-20 space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#2A5C43]"></div>
            <p className="text-[#64748b] font-medium animate-pulse">Loading connections...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {friends.map((friend) => (
              <Link
                to={`/friend/${friend.id}`}
                key={friend.id}
                className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className="mb-4">
                  <img
                    src={friend.picture}
                    alt={friend.name}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-[17px] font-bold text-[#1e293b] mb-0.5">
                  {friend.name}
                </h3>
                <p className="text-[13px] text-[#94a3b8] mb-4">
                  {friend.days_since_contact}d ago
                </p>

                <div className="flex flex-wrap justify-center gap-2 mb-5">
                  {friend.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-[#dcfce7] text-[#166534] text-[10px] font-bold rounded-full uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span
                  className={`px-5 py-1 text-[11px] font-bold rounded-full capitalize w-[85%] ${getStatusColor(
                    friend.status
                  )}`}
                >
                  {friend.status}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
      
    </div>
  );
}