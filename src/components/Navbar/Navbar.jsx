import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="w-full h-full font-bold px-8 py-1 h-5 rounded-md flex-row flex-justify-between flex-align-center flex-wrap">
        <div className="flex-row flex-justify-between flex-align-center flex-gap-1">
          <Link to="/">Flipkart Clone!</Link>
        </div>
        <div className="flex-row gap-3">
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/products">Products</NavLink>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
