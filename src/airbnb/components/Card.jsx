import star from "../assets/star.png";
/* <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="pic" /> */

const Card = ({ item }) => {
    let badgeText;
    if (!item.openSpots) {
        badgeText = "SOLD OUT";
    } else if (item.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div className="card">
            {badgeText && <div className="card__badge">{badgeText}</div>}
            <img
                src={`/airbnb/${item.coverImg}`}
                alt=""
                className="card__image"
            />
            <p className="card__rate">
                <img src={star} alt="" className="rate__star" />
                <span>{item.stats.rating}</span>
                <span className="rate__count">
                    ({item.stats.reviewCount}) - {item.location}
                </span>
            </p>
            <p className="card__topic">{item.title}</p>
            <p className="card__cost">
                <span className="text-bold">From ${item.price}</span> / person
            </p>
        </div>
    );
};

export default Card;
