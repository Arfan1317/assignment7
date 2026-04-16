# 🤝 KeenKeeper

> Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.

KeenKeeper is a modern, responsive React web application designed to act as a Personal CRM (Customer Relationship Management) tool for your personal life. It helps you track interactions with friends, family, and colleagues, ensuring you meet your relationship goals and never lose touch with the people who matter.

---

## ✨ Key Features

* **📊 Dashboard Overview:** Get at-a-glance statistics of your relationship health, including total friends, who is on track, and who needs attention.
* **📇 Smart Friend Directory:** A responsive grid layout featuring dynamic status pills (On-track, Almost Due, Overdue) and customizable tags.
* **📱 Quick Check-Ins:** Instantly log "Call", "Text", or "Video" interactions directly from a friend's detailed profile.
* **⏳ Global Timeline:** A dedicated, filterable history of all your logged interactions, managed globally via the Context API.
* **📈 Visual Analytics:** A beautiful, responsive Donut Chart built with Recharts that visualizes your communication habits by interaction type.
* **🔔 Toast Notifications:** Real-time, smooth popup feedback when logging an interaction.

---

## 🛠️ Tech Stack

This project was built with modern frontend technologies and best practices:

* **Framework:** [React](https://react.dev/) (Bootstrapped with [Vite](https://vitejs.dev/))
* **Routing:** [React Router](https://reactrouter.com/) (v6+)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **State Management:** React Context API
* **Charts:** [Recharts](https://recharts.org/)
* **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)
* **Deployment:** Netlify

---

## 🚀 Getting Started

Follow these steps to run KeenKeeper locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/keenkeeper.git](https://github.com/your-username/keenkeeper.git)
   cd keenkeeper
2. **Install dependencies:**
    ```bash
    npm install
3. **Start the development server:**
    ```bash
    npm run dev
4. **Open the app:**
    Navigate to http://localhost:5173 in your browser.

### 📂 Project Structure
keenkeeper/
├── public/
│   ├── friends.json         # Mock database of friend profiles
│   ├── friendspic/          # Profile images
│   └── _redirects           # Netlify SPA routing configuration
├── src/
│   ├── assets/              # SVG/PNG Icons (Call, Text, Video)
│   ├── components/          # Reusable UI (Navbar, Footer)
│   ├── context/             # AppContext.jsx (Global State)
│   ├── layouts/             # MainLayout.jsx (Router Outlet wrapper)
│   ├── pages/               # Page Components
│   │   ├── Home.jsx         # Dashboard & Grid
│   │   ├── FriendDetails.jsx# Individual profiles & Quick Check-in
│   │   ├── Timeline.jsx     # Filterable history log
│   │   ├── Stats.jsx        # Recharts Analytics
│   │   └── NotFound.jsx     # Custom 404 Error Page
│   ├── App.jsx              # Routing setup
│   └── main.jsx             # React entry point
├── index.html
├── tailwind.config.js       # Tailwind theme configuration
└── package.json

### 🌐 Deployment Notes

This application is configured for seamless deployment on Netlify.

It includes a public/_redirects file with the rule /* /index.html 200. This ensures that React Router handles all page navigation natively, preventing 404 errors when a user refreshes a page directly (like /timeline or /stats).

### 💡 Future Enhancements

    Integrate a real backend (Node.js/Express or Firebase) to persist user data.

    Add user authentication (Login/Signup).

    Implement the ability to dynamically Add, Edit, and Delete friends from the UI.

    Add a "Snooze" feature to temporarily mute relationship goals.

### 📄 License

This project is open-source and available under the MIT License.

**Pro-tip:** Before you upload this, just remember to change the fake GitHub link under `Installation` to your actual link, and put your name at the very bottom!