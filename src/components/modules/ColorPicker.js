import { useState } from "react";
import { TwitterPicker } from "react-color";
import { TODO_COLORS } from "../../consts/colors";

const ColorPicker = ({ defaultColor = '#000', handleChangeCallback }) => {
  const [colors] = useState(TODO_COLORS);
  const [color, setColor] = useState(defaultColor);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color) => {
    setColor(color.hex);

    if (handleChangeCallback) {
      handleChangeCallback(color);
    }
  };

  return (
    <div>
      <div className="color-picker-box-wrapper" onClick={handleClick}>
        <div
          className="color-picker-box"
          style={{ background: color }}
        />
      </div>
      {displayColorPicker ? <div className="color-picker-popover">
        <div className="color-picker-cover" onClick={handleClose}/>
        <TwitterPicker colors={colors} color={color} onChange={handleChange}/>
      </div> : null}
    </div>
  );
}

export default ColorPicker;
