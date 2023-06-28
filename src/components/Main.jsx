import Card from "./Card";
import data from "../data.js";

const Main = () => {
    const cards = data.map((item) => {
        return <Card key={item.id} item={item}></Card>;
        // return <Card key={item.id} {...item}></Card>;
    });

    return (
        <main className="main">
            <section className="section__cards">{cards}</section>
        </main>
    );
};

export default Main;
