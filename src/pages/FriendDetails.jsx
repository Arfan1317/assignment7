import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router"; 
import { AppContext } from "../context/AppContext"; // Import the Context
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";

export default function FriendDetails() {
  const { id } = useParams(); // Gets the ID from the URL
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Bring in the addInteraction function from our Context API
  const { addInteraction } = useContext(AppContext);

  useEffect(() => {
    fetch("/friends.json")
      .then((response) => response.json())
      .then((data) => {
        // Find the specific friend whose ID matches the URL
        const foundFriend = data.find((f) => f.id === parseInt(id));
        setFriend(foundFriend);
        setLoading(false);
      })
      .catch((error) => console.error("Error loading friend details:", error));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#2A5C43]"></div>
      </div>
    );
  }

  // If URL has a fake ID, show error
  if (!friend) {
    return <div className="text-center text-red-500 py-12 text-xl font-bold">Friend not found!</div>;
  }

  return (
    <div className="max-w-[1110px] mx-auto px-4 sm:px-6 py-8">
      {/* 2-Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        
        {/* ================= LEFT COLUMN (Profile & Actions) ================= */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Profile Card */}
          <div className="bg-white rounded-xl p-8 flex flex-col items-center text-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h2 className="text-[22px] font-bold text-[#1e293b] mb-2">{friend.name}</h2>
            
            <div className="flex flex-col gap-2 items-center mb-6">
              <span className={`px-4 py-1 text-[11px] font-bold rounded-full capitalize ${friend.status === 'overdue' ? 'bg-[#EF4444] text-white' : friend.status === 'almost due' ? 'bg-[#F59E0B] text-white' : 'bg-[#2A5C43] text-white'}`}>
                {friend.status}
              </span>
              {friend.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-[#dcfce7] text-[#166534] text-[10px] font-bold rounded-full uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-[#64748b] italic text-[14px] mb-2">"{friend.bio}"</p>
            <p className="text-[#94a3b8] text-[12px]">Preferred: email</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <button className="w-full bg-white border border-gray-200 rounded-lg py-3 text-[14px] font-semibold text-[#1e293b] hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              Snooze 2 Weeks
            </button>
            <button className="w-full bg-white border border-gray-200 rounded-lg py-3 text-[14px] font-semibold text-[#1e293b] hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="3" rx="2" ry="2"></rect><rect width="16" height="10" x="4" y="11" rx="2" ry="2"></rect><path d="M10 15h4"></path></svg>
              Archive
            </button>
            <button className="w-full bg-white border border-red-100 rounded-lg py-3 text-[14px] font-semibold text-red-500 hover:bg-red-50 transition-colors flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
              Delete
            </button>
          </div>
        </div>

        {/* ================= RIGHT COLUMN (Stats & Checks) ================= */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Top 3 Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 text-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100">
              <h3 className="text-[32px] font-bold text-[#2A5C43] mb-1">{friend.days_since_contact}</h3>
              <p className="text-[13px] text-[#64748b]">Days Since Contact</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100">
              <h3 className="text-[32px] font-bold text-[#2A5C43] mb-1">{friend.goal}</h3>
              <p className="text-[13px] text-[#64748b]">Goal (Days)</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100">
              <h3 className="text-[28px] font-bold text-[#2A5C43] mb-1">{friend.next_due_date}</h3>
              <p className="text-[13px] text-[#64748b]">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal Card */}
          <div className="bg-white rounded-xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100 flex items-center justify-between">
            <div>
              <h3 className="text-[16px] font-bold text-[#2A5C43] mb-1">Relationship Goal</h3>
              <p className="text-[#64748b] text-[14px]">Connect every <span className="font-bold text-[#1e293b]">{friend.goal} days</span></p>
            </div>
            <button className="border border-gray-200 text-gray-600 px-4 py-1.5 rounded-md text-[13px] hover:bg-gray-50 font-medium">
              Edit
            </button>
          </div>

          {/* Quick Check-In Card */}
          <div className="bg-white rounded-xl p-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border border-gray-100">
            <h3 className="text-[16px] font-bold text-[#2A5C43] mb-4">Quick Check-In</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Call Button */}
              <button 
                onClick={() => addInteraction("Call", friend.name)}
                className="bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-xl py-6 flex flex-col items-center justify-center gap-3 transition-colors group"
              >
                <img src={callIcon} alt="Call" className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" />
                <span className="text-[#1e293b] font-medium text-[15px]">Call</span>
              </button>

              {/* Text Button */}
              <button 
                onClick={() => addInteraction("Text", friend.name)}
                className="bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-xl py-6 flex flex-col items-center justify-center gap-3 transition-colors group"
              >
                <img src={textIcon} alt="Text" className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" />
                <span className="text-[#1e293b] font-medium text-[15px]">Text</span>
              </button>

              {/* Video Button */}
              <button 
                onClick={() => addInteraction("Video", friend.name)}
                className="bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-xl py-6 flex flex-col items-center justify-center gap-3 transition-colors group"
              >
                <img src={videoIcon} alt="Video" className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity" />
                <span className="text-[#1e293b] font-medium text-[15px]">Video</span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}