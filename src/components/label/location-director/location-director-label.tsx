import "./location-director-label.scss";

const LocationDirectorLabel = ({
  director,
  location,
}: {
  director: string;
  location: string;
}) => {
  return (
    <span>
      {director} <span className="location">{location}</span>
    </span>
  );
};
export default LocationDirectorLabel;
