import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className="header">
      <h1 style={headerStyle}>{title}</h1>
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS styles in JS
const headerStyle = {
  color: "darkred",
  backgroundColor: "#e4c3d1",
};

export default Header;
