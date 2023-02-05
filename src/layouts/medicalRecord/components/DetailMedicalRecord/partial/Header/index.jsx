import BackButton from "components/extend/Button/BackButton";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import React from "react";
import PropTypes from "prop-types";

export default function Header({ title }) {
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
      <BackButton to="/medical-record/list-medical-record" />
      <MDTypography variant="h6" color="white">
        {title}
      </MDTypography>
    </MDBox>
  );
}
Header.defaultProps = {
  title: "title",
};
Header.propTypes = {
  title: PropTypes.string,
};
