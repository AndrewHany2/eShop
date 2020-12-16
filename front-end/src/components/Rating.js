import React from "react";
import PropTypes from "prop-types";

function Rating({ value, text, color }) {
  return (
    <div className="rating">
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 1
              ? `fas fa-star`
              : value >= 0.5
              ? `fa fa-star-half-alt`
              : `far fa-star`
          }
        />
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 2
              ? `fas fa-star`
              : value >= 1.5
              ? `fa fa-star-half-alt`
              : `far fa-star`
          }
        />
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 3
              ? `fas fa-star`
              : value >= 2.5
              ? `fa fa-star-half-alt`
              : `far fa-star`
          }
        />
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 4
              ? `fas fa-star`
              : value >= 3.5
              ? `fa fa-star-half-alt`
              : `far fa-star`
          }
        />
      </span>
      <span>
        <i
          style={{ color: color }}
          className={
            value >= 5
              ? `fas fa-star`
              : value >= 4.5
              ? `fa fa-star-half-alt`
              : `far fa-star`
          }
        />
      </span>
      <span>{text && text}</span>
    </div>
  );
}
Rating.defaultProps = {
  color: `#f8e825`,
};

Rating.protoTypes = {
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
