import React from "react";
import { connect } from "react-redux";
import { setFavorite } from "../actions";
import PropTypes from "prop-types";
import "../assets/styles/components/CarouselItem.scss";
import playIcon from "../assets/images/play-icon.png";
import plusIcon from "../assets/images/plus-icon.png";

function CarouselItem({
  cover,
  title,
  duration,
  year,
  contentRating,
  setFavorite,
}) {
  const handleFavorite = () => {
    setFavorite({
      cover,
      title,
      duration,
      year,
      contentRating,
    });
  };

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            src={playIcon}
            alt="Play Icon"
          />
          <img
            className="carousel-item__details--img"
            src={plusIcon}
            alt="Plus Icon"
            onClick={handleFavorite}
          />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`Año:${year} Edades:${contentRating} Duración:${duration} minutos`}
        </p>
      </div>
    </div>
  );
}

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  duration: PropTypes.number,
  year: PropTypes.number,
  contentRating: PropTypes.string,
};

const mapDispatchToProps = {
  setFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
