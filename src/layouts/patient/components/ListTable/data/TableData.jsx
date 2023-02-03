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
import MDBadge from "components/MDBadge";
// Images
import team2 from "assets/images/team-2.jpg";

import {
  ActionColumnFormatter,
  BirthDateColumnFormatter,
  NameColumnFormatter,
  StatusColumnFormatter,
} from "./formatter";

export default function data(entities) {
  const dataMapping = entities.map((item, index) => {
    return {
      name: <NameColumnFormatter image={team2} name={item.name} email={item.user.email} />,
      birthdate: (
        <BirthDateColumnFormatter birth_date={item.birth_date} age={`${item.age} Years Old`} />
      ),
      status: (
        <StatusColumnFormatter
          quotas={item.quotas}
          status={<MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />}
        />
      ),
      action: <ActionColumnFormatter id={item.id} />,
    };
  });
  return {
    columns: [
      { Header: "Name", accessor: "name", width: "25%", align: "left" },
      { Header: "Birth Date", accessor: "birthdate", width: "7%", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: dataMapping,
  };
}
