import React from "react";
import LocationCard from "./LocationCard";
import PropTypes from "prop-types";

function LocationLists({ locationList }) {
  return (
    <div className="App">
      {locationList.map((item) => (
        <LocationCard
          key={item.id}
          name={item.name}
          users={item.userCount}
          date={item.createdAt}
          description={item.description}
        />
      ))}
    </div>
  );
}
export default LocationLists;

LocationLists.propTypes = {
  locationList: PropTypes.array.isRequired,
};
