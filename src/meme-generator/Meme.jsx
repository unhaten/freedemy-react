import Header from "./components/Header";
import Main from "./components/Main";
import "./styles/style.css";

const Meme = () => {
    return (
        <>
            <Header></Header>
            <main className="main">
                <Main></Main>
            </main>
        </>
    );
};

export default Meme;
