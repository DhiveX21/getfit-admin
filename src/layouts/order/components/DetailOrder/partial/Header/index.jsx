import React from "react";
import PropTypes from "prop-types";
import MDBox from "components/MDBox";
import BackButton from "components/extend/Button/BackButton";
import MDTypography from "components/MDTypography";

export const Header = ({ title }) => {
  return (
    <MDBox
      mx={2}
      mt={-3}
      py={3}
      px={2}
      variant="gradient"
      bgColor="info"
      borderRadius="lg"
      coloredShadow="info"
      display="flex"
      gap="20px"
      alignItems="center"
    >
      <BackButton to="/order/list-order" />
      <MDTypography variant="h6" color="white">
        {title}
      </MDTypography>
    </MDBox>
  );
}

Header.defaultProps = {
  title: "Title",
};

Header.propTypes = {
  title: PropTypes.string,
};
