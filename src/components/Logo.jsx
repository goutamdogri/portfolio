import propTypes from "prop-types";

function Logo({ children }) {
  return (
    <a href="#">
      <h1 className="font-logoText font-bold">{children}</h1>
    </a>
  );
}

Logo.propTypes = {
  children: propTypes.node,
};

export default Logo;
