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
import { PriceFormat } from "helpers/PriceHelpers";

// formatter


export default function data(entities) {
  const data = entities.map((item) => {
    return {
      name: (
        <MDTypography display="block" variant="button" fontWeight="medium">
          {item.name}
        </MDTypography>
      ),
      code: (
        <MDTypography display="block" variant="button" fontWeight="medium">
          {item.code}
        </MDTypography>
      ),
      quota: (
        <MDBadge badgeContent={item.quota} color="primary" variant="gradient" size="sm" />
      ),
      cost_paid: (
        <MDTypography display="block" variant="button" fontWeight="medium">
          Rp. {PriceFormat(item.cost_paid)}
        </MDTypography>
      ),
      status: (
        item.status ? (
          <MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />
        ) : (
          <MDBadge badgeContent="inactive" color="danger" variant="gradient" size="sm" />
        )
      ),
      action: (
        <Link to={`/product/${item.id}`}>
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
      { Header: "Code", accessor: "code", width: "20%", align: "left" },
      { Header: "Quota", accessor: "quota", width: "20%", align: "left" },
      { Header: "Price", accessor: "cost_paid", width: "10%", align: "center" },
      { Header: "Status", accessor: "status", width: "10%", align: "center" },
      { Header: "Action", accessor: "action", width: "20%", align: "center" },
    ],

    rows: data,
  };
}
