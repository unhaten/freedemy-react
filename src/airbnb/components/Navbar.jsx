import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="" className="nav__logo" />
        </nav>
    );
};

export default Navbar;
