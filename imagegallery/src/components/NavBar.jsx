import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-center items-center bg-blue-300 m-2 rounded-full p-2">
      <div className="flex-shrink-0 pl-4">
        <Link to={''}>
        VisualCrave
        </Link>
        </div>
      <ul className="flex flex-grow justify-center items-center space-x-6">
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
