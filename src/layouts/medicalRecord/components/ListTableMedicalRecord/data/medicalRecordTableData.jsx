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
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import { Link } from "react-router-dom";

// formatter

import { NameColumnFormatter } from "./formatter/nameFormatter";
import { TimeColumnFormatter } from "./formatter/timeFormatter";

export default function data(entities) {
  console.log(entities);

  const data = entities.map((item) => {
    return {
      patient: (
        <NameColumnFormatter
          image={team2}
          name={item.patient_detail.name}
          phoneNumber={item.patient_detail.phone_number}
        />
      ),
      physio: (
        <MDTypography display="block" variant="caption" color="text" fontWeight="bold">
          {item.therapist_detail.name}
        </MDTypography>
      ),
      date: (
        <TimeColumnFormatter
          from={`${item.patient_detail.date} ${item.patient_detail.time}`}
          to={`${item.patient_detail.date} ${item.patient_detail.time}`}
        />
      ),
      type: (
        <MDBadge
          badgeContent={item.appointment_type}
          color="primary"
          variant="gradient"
          size="sm"
        />
      ),
      status: <MDBadge badgeContent="Finished" color="success" variant="gradient" size="sm" />,
      action: (
        <Link to={`/medical-record/${item._id}`}>
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
      { Header: "Patient", accessor: "patient", width: "20%", align: "left" },
      { Header: "Physio", accessor: "physio", width: "20%", align: "left" },
      { Header: "Date", accessor: "date", width: "20%", align: "center" },
      { Header: "Type", accessor: "type", width: "10%", align: "center" },
      { Header: "Status", accessor: "status", width: "10%", align: "center" },
      { Header: "action", accessor: "action", width: "20%", align: "center" },
    ],

    rows: data,
  };
}
