import propTypes from "prop-types";

function Menu({ className = "", children, link = "#" }) {
  return (
    <div className={`h-5 flex items-center hover:border-b-2 text-lg  ${className}`}>
      <a href={link}>{children}</a>
    </div>
  );
}

Menu.propTypes = {
  className: propTypes.string,
  children: propTypes.node,
  link: propTypes.string,
};

export default Menu;
