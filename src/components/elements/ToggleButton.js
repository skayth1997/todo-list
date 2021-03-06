import { useState } from "react";
import SvgBottomArrow from "../icons/SvgBottomArrow";
import SvgLeftArrow from "../icons/SvgLeftArrow";

const ToggleButton = (props) => {
  const {
    show = false,
    className = 'cursor-pointer d-inline-block',
    onChangeCallback,
    showIcon = <SvgBottomArrow/>,
    hideIcon = <SvgLeftArrow/>
  } = props;
  const [isShown, setIsShown] = useState(show);

  const handleChange = () => {
    setIsShown(!isShown);

    onChangeCallback && onChangeCallback(isShown);
  };

  return <div className={className} onClick={handleChange}>{isShown ? showIcon : hideIcon}</div>;
};

export default ToggleButton;
