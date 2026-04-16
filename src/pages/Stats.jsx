import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

export default function Stats() {
 
  const { timeline } = useContext(AppContext);

  const callCount = timeline.filter((item) => item.type === "Call").length;
  const textCount = timeline.filter((item) => item.type === "Text").length;
  const videoCount = timeline.filter((item) => item.type === "Video").length;

  const data = [
    { name: "Text", value: textCount, color: "#8B5CF6" }, 
    { name: "Call", value: callCount, color: "#2A5C43" }, 
    { name: "Video", value: videoCount, color: "#22C55E" } 
  ];

  
  const activeData = data.filter((item) => item.value > 0);

  return (
    <div className="max-w-[1110px] mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-4xl font-bold text-[#1e293b] mb-8">Friendship Analytics</h1>

      
      <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] h-[450px] flex flex-col">
        <h3 className="text-[15px] font-semibold text-[#2A5C43] mb-6">By Interaction Type</h3>
        
       
        {activeData.length === 0 ? (
          <div className="flex-grow flex items-center justify-center text-[#64748b]">
            Your chart is empty! Go to a friend's profile and log some check-ins to see your stats.
          </div>
        ) : (
          <div className="flex-grow">
           
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={activeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={90} 
                  outerRadius={130}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  
                  {activeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                
                
                <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  iconType="circle"
                  formatter={(value) => <span className="text-[#64748b] text-[14px] ml-1 mr-4">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}