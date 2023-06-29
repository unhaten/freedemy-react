import Card from "./Card";
import data from "../data";

const Main = () => {
    return (
        <main>
            <section className="section__cards">
                {data.map((card) => {
                    return (
                        <Card
                            key={card.id}
                            title={card.title}
                            location={card.location}
                            googleMapsUrl={card.googleMapsUrl}
                            startDate={card.startDate}
                            endDate={card.endDate}
                            description={card.description}
                            imageUrl={card.imageUrl}
                        ></Card>
                    );
                })}
            </section>
        </main>
    );
};

export default Main;
