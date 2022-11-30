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
import { Link } from "react-router-dom";

// formatter
import { NameColumnFormatter } from "./formatter/nameFormatter";


export default function data(entities) {
  const data = entities.map((item) => {
    return {
      title: <NameColumnFormatter name={item.title} phoneNumber={item.description} />,
      url: (
        <MDTypography
          display="block"
          variant="caption"
          color="text"
          fontWeight="bold"
          className="max-w-[200px]"
        >
          {item.video_url}
        </MDTypography>
      ),
      status: (
        item.is_active ? (
          <MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />
        ) : (
          <MDBadge badgeContent="inactive" color="danger" variant="gradient" size="sm" />
        )
      ),
      category: (
        <MDBadge badgeContent={item.category.title} color="primary" variant="gradient" size="sm" />
      ),

      action: (
        <Link to={`/video/${item.id}`}>
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
      { Header: "title", accessor: "title", width: "20%", align: "left" },
      { Header: "URL", accessor: "url", width: "20%", align: "left" },
      { Header: "status", accessor: "status", width: "20%", align: "left" },
      { Header: "category", accessor: "category", width: "10%", align: "center" },
      { Header: "action", accessor: "action", width: "20%", align: "center" },
    ],

    rows: data,
  };
}
