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

import { Link } from "react-router-dom";

// formatter

import { TitleColumnFormatter } from "./formatter/titleFormatter";
import { dateFormater } from "helpers/DateHelpers";
import { DescriptionColumnFormatter } from "./formatter/descriptionFormatter";

export default function data(entities) {
  const data = entities.map((item) => {
    return {
      title: <TitleColumnFormatter title={item.title} />,
      description: <DescriptionColumnFormatter description={item.description} />,
      date: (
        <MDTypography display="block" variant="caption" color="text" fontWeight="bold">
          {dateFormater(item.created_at)}
        </MDTypography>
      ),
      type: (
        <MDBadge
          badgeContent={item.is_important ? "Prioritas" : "Normal"}
          color={item.is_important ? "primary" : "info"}
          variant="gradient"
          size="sm"
        />
      ),
      receive: (
        <MDBadge
          badgeContent={item.user_id === -1 ? "All User" : "Specific User"}
          color={item.user_id === -1 ? "success" : "primary"}
          variant="gradient"
          size="sm"
        />
      ),
      category: (
        <MDBadge badgeContent={item.category.title} color="success" variant="gradient" size="sm" />
      ),
      action: (
        <Link to={`/notification/${item.id}`}>
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
      { Header: "title", accessor: "title", align: "left" },
      { Header: "description", accessor: "description", align: "left" },
      { Header: "date", accessor: "date", align: "center" },
      { Header: "type", accessor: "type", width: "10%", align: "center" },
      { Header: "receive", accessor: "receive", width: "10%", align: "center" },
      { Header: "category", accessor: "category", width: "10%", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: data,
  };
}
