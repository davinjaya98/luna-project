import "./location-director-label.scss";

const LocationDirectorLabel = ({ director, location }) => {
  return (
    <span>
      {director} <span className="location">{location}</span>
    </span>
  );
};
export default LocationDirectorLabel;
