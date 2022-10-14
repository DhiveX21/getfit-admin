import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { getStorage } from "helpers/LocalStorageHelpers";

export default function RoutesValidation({ children }) {
  const credentials = JSON.parse(getStorage("credentials"));
  return credentials ? children : <Navigate replace to="/sign-in" />;
}

RoutesValidation.defaultProps = {
  children: null,
};
RoutesValidation.propTypes = {
  children: PropTypes.element,
};
