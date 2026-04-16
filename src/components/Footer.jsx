import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#2A5C43] text-white py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-2">KeenKeeper</h2>
        <p className="text-sm text-green-100 mb-6">
          Your personal vault of meaningful connections. Browse, track and nurture friendships that matter most.
        </p>
        
        {/* Social Icons Placeholder */}
        <div className="flex gap-4 mb-8">
          <div className="w-8 h-8 rounded-full bg-white text-[#2A5C43] flex items-center justify-center font-bold">in</div>
          <div className="w-8 h-8 rounded-full bg-white text-[#2A5C43] flex items-center justify-center font-bold">f</div>
          <div className="w-8 h-8 rounded-full bg-white text-[#2A5C43] flex items-center justify-center font-bold">x</div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-green-200 border-t border-green-700/50 pt-6 w-full max-w-2xl">
          <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-white">Terms of Service</Link>
            <Link to="#" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}