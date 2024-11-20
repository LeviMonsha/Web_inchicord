import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">MyApp</div>
        <div className="space-x-4">
          <Link
            className="text-lg font-semibold text-gray-700 hover:text-blue-600"
            to="/register"
          >
            Register
          </Link>
          <Link
            className="text-lg font-semibold text-gray-700 hover:text-blue-600"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="text-lg font-semibold text-gray-700 hover:text-blue-600"
            to="/reset"
          >
            Reset Password
          </Link>
        </div>
      </div>
    </nav>
  );
}
