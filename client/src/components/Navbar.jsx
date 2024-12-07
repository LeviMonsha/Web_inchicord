import { useNavigate } from "react-router-dom";
import { auth } from "../configs/firebaseConfig";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.signOut();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">Inchicord</div>
      </div>
      <button
        onClick={handleLogout}
        className="text-red-400 px-4 py-3 hover:text-red-600 transition duration-200"
      >
        Logout
      </button>
    </nav>
  );
}
