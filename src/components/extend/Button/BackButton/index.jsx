import React from "react";
import MDButton from "components/MDButton";
import { Link } from "react-router-dom";
import { SvgIcon } from "@mui/material";
import PropTypes from "prop-types";

export default function BackButton({ to }) {
  return (
    <Link to={to}>
      <MDButton variant="gradient" color="primary">
        <SvgIcon fontSize="large">
          <path
            fill="currentColor"
            d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"
          />
        </SvgIcon>
      </MDButton>
    </Link>
  );
}

BackButton.defaultProps = {
  to: "/",
};

BackButton.propTypes = {
  to: PropTypes.string,
};
