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

export default function data() {
  const Name = ({ image, name, phoneNumber }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{phoneNumber}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Time = ({ from, to }) => (
    <MDBox lineHeight={1} textAlign="center">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {`${new Date(from).getDate()} ${new Date(from).getMonth()} ${new Date(from).getFullYear()}`}
      </MDTypography>
      <MDBox display="flex" gap="20px" lineHeight={1} textAlign="left">
        <MDTypography variant="caption">{`${new Date(to).getHours()}:${new Date(
          to
        ).getMinutes()}:${new Date(to).getSeconds()}`}</MDTypography>
        <MDTypography variant="caption">{`${new Date(to).getHours()}:${new Date(
          to
        ).getMinutes()}:${new Date(to).getSeconds()}`}</MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Patient", accessor: "patient", width: "20%", align: "left" },
      { Header: "Physio", accessor: "physio", width: "20%", align: "left" },
      { Header: "Date", accessor: "date", width: "20%", align: "center" },
      { Header: "Type", accessor: "type", width: "10%", align: "center" },
      { Header: "Status", accessor: "status", width: "10%", align: "center" },
      { Header: "action", accessor: "action", width: "20%", align: "center" },
    ],

    rows: [
      {
        patient: <Name image={team2} name="John Michael" phoneNumber="089561135135" />,
        physio: (
          <MDTypography display="block" variant="caption" color="text" fontWeight="bold">
            Rifa Rahmalia. S. Kes
          </MDTypography>
        ),
        date: <Time from="2022-09-24 01:00:11" to="2022-09-24 01:00:11" />,
        type: <MDBadge badgeContent="Tele Physio" color="primary" variant="gradient" size="sm" />,
        status: <MDBadge badgeContent="Finished" color="success" variant="gradient" size="sm" />,
        action: (
          <Link to="/medical-record/123">
            <MDTypography variant="caption" color="text" fontWeight="medium">
              <MDButton variant="gradient" color="info">
                Detail
              </MDButton>
            </MDTypography>
          </Link>
        ),
      },
      {
        patient: <Name image={team3} name="Alexa Liras" phoneNumber="0212324413" />,
        physio: (
          <MDTypography display="block" variant="caption" color="text" fontWeight="bold">
            Rifa Rahmalia. S. Kes
          </MDTypography>
        ),
        date: <Time from="2022-09-24 01:00:11" to="2022-09-24 01:00:11" />,
        type: <MDBadge badgeContent="Tele Physio" color="primary" variant="gradient" size="sm" />,
        status: <MDBadge badgeContent="Finished" color="success" variant="gradient" size="sm" />,
        action: (
          <Link to="/medical-record/123">
            <MDTypography variant="caption" color="text" fontWeight="medium">
              <MDButton variant="gradient" color="info">
                Detail
              </MDButton>
            </MDTypography>
          </Link>
        ),
      },
      {
        patient: <Name image={team4} name="Laurent Perrier" phoneNumber="0894321654" />,
        physio: (
          <MDTypography display="block" variant="caption" color="text" fontWeight="bold">
            Rifa Rahmalia. S. Kes
          </MDTypography>
        ),
        date: <Time from="2022-09-24 01:00:11" to="2022-09-24 01:00:11" />,
        type: <MDBadge badgeContent="Tele Physio" color="primary" variant="gradient" size="sm" />,
        status: <MDBadge badgeContent="Finished" color="success" variant="gradient" size="sm" />,
        action: (
          <Link to="/medical-record/123">
            <MDTypography variant="caption" color="text" fontWeight="medium">
              <MDButton variant="gradient" color="info">
                Detail
              </MDButton>
            </MDTypography>
          </Link>
        ),
      },
      {
        patient: <Name image={team3} name="Michael Levi" phoneNumber="081987354124" />,
        physio: (
          <MDTypography display="block" variant="caption" color="text" fontWeight="bold">
            Rifa Rahmalia. S. Kes
          </MDTypography>
        ),
        date: <Time from="2022-09-24 01:00:11" to="2022-09-24 01:00:11" />,
        type: <MDBadge badgeContent="Tele Physio" color="primary" variant="gradient" size="sm" />,
        status: <MDBadge badgeContent="Finished" color="success" variant="gradient" size="sm" />,
        action: (
          <Link to="/medical-record/123">
            <MDTypography variant="caption" color="text" fontWeight="medium">
              <MDButton variant="gradient" color="info">
                Detail
              </MDButton>
            </MDTypography>
          </Link>
        ),
      },
      {
        patient: <Name image={team3} name="Richard Gran" phoneNumber="0894321543" />,
        physio: (
          <MDTypography display="block" variant="caption" color="text" fontWeight="bold">
            Rifa Rahmalia. S. Kes
          </MDTypography>
        ),
        date: <Time from="2022-09-24 01:00:11" to="2022-09-24 01:00:11" />,
        type: <MDBadge badgeContent="Tele Physio" color="primary" variant="gradient" size="sm" />,
        status: <MDBadge badgeContent="Finished" color="success" variant="gradient" size="sm" />,
        action: (
          <Link to="/medical-record/123">
            <MDTypography variant="caption" color="text" fontWeight="medium">
              <MDButton variant="gradient" color="info">
                Detail
              </MDButton>
            </MDTypography>
          </Link>
        ),
      },
      {
        patient: <Name image={team4} name="Miriam Eric" phoneNumber="0894321654" />,
        physio: (
          <MDTypography display="block" variant="caption" color="text" fontWeight="bold">
            Rifa Rahmalia. S. Kes
          </MDTypography>
        ),
        date: <Time from="2022-09-24 01:00:11" to="2022-09-24 01:00:11" />,
        type: <MDBadge badgeContent="Tele Physio" color="primary" variant="gradient" size="sm" />,
        status: <MDBadge badgeContent="Finished" color="success" variant="gradient" size="sm" />,
        action: (
          <Link to="/medical-record/123123123">
            <MDTypography variant="caption" color="text" fontWeight="medium">
              <MDButton variant="gradient" color="info">
                Detail
              </MDButton>
            </MDTypography>
          </Link>
        ),
      },
    ],
  };
}
