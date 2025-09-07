import { Link } from "react-router-dom";

type Props = {
  loggedIn: boolean;
  setLoggedIn: (v: boolean) => void;
};

export default function Navbar({ loggedIn, setLoggedIn }: Props) {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="font-bold text-xl heading">
        <Link to="/">SJA Pathway</Link>
      </div>
      <div className="space-x-4 flex items-center navlinks">
    <Link to="/">Home</Link>
    <Link to="/jobs">Jobs</Link>
    {loggedIn ? (
        <>
        <Link to="/dashboard">Dashboard</Link>
        <button
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            onClick={() => setLoggedIn(false)}
        >
            Logout
        </button>
        </>
    ) : (
        <>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        </>
    )}
    </div>
    </nav>
  );
}