import { useState, useEffect } from "react";
// import data from "../memesData.js";

const Main = () => {
    // console.log(data.data.memes);
    // const [memeImage, setMemeImage] = useState("");
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg",
    });
    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMemes(data.data.memes);
        }
        getMemes();
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        // setMemeImage(
        // data.data.memes[Math.floor(Math.random() * data.data.memes.length)]
        //     .url
        // );
        setMeme((prev) => ({
            ...prev,
            randomImage:
                allMemes[Math.floor(Math.random() * allMemes.length)].url,
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMeme((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // console.log(allMemes);

    return (
        <>
            <form className="form">
                <div className="input__container">
                    <input
                        type="text"
                        className="form__input_1 form__input"
                        placeholder="Top text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        className="form__input_2 form__input"
                        placeholder="Bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <button className="form__button" onClick={handleClick}>
                    Get a new meme image 🖼
                </button>
            </form>
            <div className="meme__container">
                <img
                    src={meme.randomImage}
                    alt="meme-pic"
                    className="meme__image"
                />
                <h2 className="meme__text_top meme__text">{meme.topText}</h2>
                <h2 className="meme__text_bottom meme__text">
                    {meme.bottomText}
                </h2>
            </div>
        </>
    );
};

export default Main;
