import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
     
      <h1 className="text-[100px] md:text-[130px] font-extrabold text-[#2A5C43] leading-none mb-2 tracking-tight">
        404
      </h1>
     
      <h2 className="text-[24px] md:text-[28px] font-bold text-[#1e293b] mb-4">
        Page Not Found
      </h2>
     
      <p className="text-[#64748b] text-[15px] md:text-[16px] max-w-[400px] mb-8 leading-relaxed">
        Looks like this friendship link is broken. The page you're looking for doesn't exist or has been moved.
      </p>
     
      <Link
        to="/"
        className="inline-flex items-center justify-center gap-2 bg-[#2A5C43] hover:bg-[#1f4532] text-white px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        Back to Home
      </Link>
      
    </div>
  );
}