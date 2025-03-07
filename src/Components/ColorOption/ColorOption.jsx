import PropTypes from "prop-types";
import { memo } from "react";

//ColorOption
const ColorOption = ({ label, index, onClick }) => (
  <div className="color-block">
    <div className="color-Name">{label}</div>
    <button
      aria-label="Color button"
      type="button"
      onClick={() => onClick(index)}
      className="color-button"
    />
  </div>
);

ColorOption.propTypes = {
  label: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default memo(ColorOption);
