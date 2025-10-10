import Logo from "../logo/Logo";
import Navlist from "../navlist/Navlist";
import "./Navbar.css";



let age = 67;

const Navbar = () => {
  return (
    <nav className="mynavbar container">
      <Logo />
      <Navlist />
    </nav>
  );
};

export default Navbar;
