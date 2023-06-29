import staticImage from "../assets/static-image.png";

const Hero = () => {
    return (
        <section>
            <img src={staticImage} alt="" className="hero__image" />
            <h1 className="hero__header">Online Experiences</h1>
            <p className="hero__text">
                Join unique interactive activities led by one-of-a-kind
                hosts—all without leaving home.
            </p>
        </section>
    );
};

export default Hero;
