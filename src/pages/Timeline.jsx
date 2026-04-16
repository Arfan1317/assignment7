import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";

export default function Timeline() {
  const { timeline } = useContext(AppContext);
  const [filter, setFilter] = useState("All");

  const filteredTimeline = timeline.filter((item) => {
    if (filter === "All") return true;
    return item.type === filter;
  });

  const getIcon = (type) => {
    if (type === "Call") return callIcon;
    if (type === "Text") return textIcon;
    if (type === "Video") return videoIcon;
    return callIcon; 
  };

  return (
    <div className="max-w-[1110px] mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-[32px] font-bold text-[#1e293b] mb-6">Timeline</h1>
      
      <div className="relative w-full sm:w-[260px] mb-8">
        <select 
          className="w-full bg-white border border-gray-100 shadow-sm text-[#64748b] text-[15px] rounded-lg px-4 py-3 focus:outline-none focus:border-[#2A5C43] appearance-none cursor-pointer"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">Filter timeline</option>
          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>
      
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#94a3b8]">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {timeline.length === 0 ? (
         
          <div className="text-[#64748b] text-center py-16 bg-white border border-gray-100 rounded-xl shadow-sm text-[15px]">
            Your timeline is currently empty. Head over to a friend's profile to log a quick check-in!
          </div>
        ) : filteredTimeline.length === 0 ? (
          
          <div className="text-[#64748b] text-center py-16 bg-white border border-gray-100 rounded-xl shadow-sm text-[15px]">
            No {filter.toLowerCase()} interactions found.
          </div>
        ) : (
         
          filteredTimeline.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-gray-100 rounded-xl p-5 flex items-center gap-5 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 flex items-center justify-center">
                 <img src={getIcon(item.type)} alt={item.type} className="w-10 h-10 object-contain" />
              </div>
              <div>
                 <p className="text-[15.5px] text-[#64748b]">
                   <strong className="text-[#1e293b] font-bold">{item.type}</strong> with {item.friendName}
                 </p>
                 <p className="text-[13.5px] text-[#94a3b8] mt-0.5">{item.date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}