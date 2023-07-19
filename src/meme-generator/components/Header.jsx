import trollface from "../assets/trollface.png";

const Header = () => {
    return (
        <header>
            <nav className="nav">
                <div className="nav__left">
                    <img
                        src={trollface}
                        alt="trollface"
                        className="trollface"
                    />
                    <h1 className="header__text">Meme Generator</h1>
                </div>
                <div className="nav__right">
                React Course - Project 3
                </div>
            </nav>
        </header>
    );
};

export default Header;
