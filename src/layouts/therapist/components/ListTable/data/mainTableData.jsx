/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";

import { Link } from "react-router-dom";

// formatter

import { NameColumnFormatter } from "./formatter/nameFormatter";

export default function data(entities) {
  const data = entities.map((item) => {
    return {
      name: (
        <NameColumnFormatter image={team2} name={item.name} phoneNumber={item.user.phone_number} />
      ),
      position: (
        <MDTypography
          display="block"
          textTransform="capitalize"
          variant="caption"
          color="text"
          fontWeight="bold"
        >
          {item.position}
        </MDTypography>
      ),
      status: <MDBadge badgeContent="Active" color="success" variant="gradient" size="sm" />,
      action: (
        <Link to={`/therapist/${item.id}`}>
          <MDTypography variant="caption" color="text" fontWeight="medium">
            <MDButton variant="gradient" color="info">
              Detail
            </MDButton>
          </MDTypography>
        </Link>
      ),
    };
  });

  return {
    columns: [
      { Header: "Name", accessor: "name", width: "20%", align: "left" },
      { Header: "Position", accessor: "position", width: "20%", align: "left" },
      { Header: "Status", accessor: "status", width: "10%", align: "center" },
      { Header: "action", accessor: "action", width: "20%", align: "center" },
    ],

    rows: data,
  };
}
