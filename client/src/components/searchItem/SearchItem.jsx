import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  // Fonction pour formater les prix
  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'MAD'
    }).format(price);
  };

  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m Du centre</span>
        <span className="siTaxiOp">Taxi aéroport gratuit</span>
        <span className="siSubtitle">
          {item.title}
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Annulation gratuite </span>
        <span className="siCancelOpSubtitle">
          Vous pouvez annuler plus tard, alors réservez ce prix avantageux dès aujourd'hui !
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">{formatPrice(item.cheapestPrice)}</span>
          <span className="siTaxOp">Comprend les taxes et frais</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">Voir la disponibilité</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
