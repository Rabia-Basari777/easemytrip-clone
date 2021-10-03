import { useState } from "react";
function Dropdownre({ select, setselect }) {
  const [isactive, setisActive] = useState(false);
  const options = [
    "Delhi(DEL)",
    "Bangalore(BLR)",
    "Mumbai(BOM)",
    "Kolkata(CCU)",
    "Goa(GOI)",
    "Hyderabad(HYD))",
    "Chennai(MAA)",
  ];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setisActive(!isactive)}>
        {select}
        <span className="fas fa-caret-down"></span>
      </div>
      {isactive && (
        <div className="dropdown-content">
          {options.map((el) => (
            <div
              onClick={(e) => {
                setselect(el);
                setisActive(false);
              }}
              className="dropdown-item"
            >
              {el}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdownre;
