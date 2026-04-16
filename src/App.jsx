import { BrowserRouter, Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import { AppProvider } from "./context/AppContext"; 
import "react-toastify/dist/ReactToastify.css"; 

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import FriendDetails from "./pages/FriendDetails";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
   
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/friend/:id" element={<FriendDetails />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/stats" element={<Stats />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      
      <ToastContainer />
    </AppProvider>
  );
}