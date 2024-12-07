import { Link, useNavigate } from "react-router-dom";
import Chat from "../components/Chat";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">Inchicord</div>
      </div>
    </nav>
  );
}
