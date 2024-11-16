import React from "react";
import WSRoutes from "./routes/routes";
import { AuthProvider } from "./context/AuthProvider";

// import HomePage from './pages/HomePage';
// import NullPage from './pages/NullPage';

// import Header from './components/Header';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className='App bg-[rgb(78,92,137)] min-h-screen'>
//       <Router>
//           <Header className="header"/>
//           <div className="app-container mx-auto max-w-[1280px] px-4 min-h-[800px]">
//             <Routes className="main">
//               <Route path="/" exact element={<HomePage />} />
//               <Route path="/social-media" element={<NullPage />} />
//               <Route path="/about" element={<NullPage />} />
//             </Routes>
//           </div>
//           <Footer className="footer"/>
//         </Router>
//     </div>
//   );
// }

const App = () => {
  return (
    <AuthProvider>
      <WSRoutes />
    </AuthProvider>
  );
};

export default App;
