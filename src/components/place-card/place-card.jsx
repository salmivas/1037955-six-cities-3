import React from "react";
import PropTypes from "prop-types";

const PremiumMarkup = () => {
  return (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  );
};

const PlaceCard = ({offer, onHover}) => (
  <article
    className="cities__place-card place-card"
    onMouseOver={() => onHover(offer)}
    key
  >
    {offer.premiality && <PremiumMarkup/>}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={offer.image} width="260" height="200" alt="Place image"/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `80%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{offer.header}</a>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>
);

PlaceCard.propTypes = {
  onHover: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    header: PropTypes.string.isRequired,
    premiality: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};

export default PlaceCard;
