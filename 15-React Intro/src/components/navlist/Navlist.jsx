import "./Navlist.css";
import { Link } from "react-router-dom";
const Navlist = () => {
  return (
    <ul className="nav_list">
      <li className="nav_list-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav_list-item">
        <Link to="/about">About</Link>
      </li>
      <li className="nav_list-item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default Navlist;
