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
import MDBadge from "components/MDBadge";
import MDButton from "components/MDButton";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Name = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const BirthDate = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  const Status = ({ status, homeCare, inClinic, teleFisio, webinars, tools }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDBox width="100%" display="flex" mb="10px" justifyContent="center">
        {status}
      </MDBox>
      <MDBox display="flex" gap="22px">
        <MDBox ml={-1} textAlign="center">
          <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
            HomeCare
          </MDTypography>
          <MDTypography variant="caption">{homeCare}</MDTypography>
        </MDBox>
        <MDBox ml={-1} textAlign="center">
          <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
            InClinic
          </MDTypography>
          <MDTypography variant="caption">{inClinic}</MDTypography>
        </MDBox>
        <MDBox ml={-1} textAlign="center">
          <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
            TeleFisio
          </MDTypography>
          <MDTypography variant="caption">{teleFisio}</MDTypography>
        </MDBox>
        <MDBox ml={-1} textAlign="center">
          <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
            Webinars
          </MDTypography>
          <MDTypography variant="caption">{webinars}</MDTypography>
        </MDBox>
        <MDBox ml={-1} textAlign="center">
          <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
            InClinic
          </MDTypography>
          <MDTypography variant="caption">{tools}</MDTypography>
        </MDBox>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Name", accessor: "name", width: "25%", align: "left" },
      { Header: "Birth Date", accessor: "birthdate", width: "7%", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        name: <Name image={team2} name="John Michael" email="john@creative-tim.com" />,
        birthdate: <BirthDate title="12 Januari 1997" description="25 Tahun" />,
        status: (
          <Status
            homeCare={10}
            teleFisio={5}
            inClinic={3}
            tools={1}
            webinars={10}
            status={<MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />}
          />
        ),
        action: (
          <MDTypography
            component="a"
            href="/patient/123"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            <MDButton variant="gradient" color="info">
              Detail
            </MDButton>
          </MDTypography>
        ),
      },
      {
        name: <Name image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
        birthdate: <BirthDate title="22 Januari 1995" description="27 Tahun" />,
        status: (
          <Status
            homeCare={10}
            teleFisio={5}
            inClinic={3}
            tools={1}
            webinars={10}
            status={<MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />}
          />
        ),
        action: (
          <MDTypography
            component="a"
            href="/patient/123"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            <MDButton variant="gradient" color="info">
              Detail
            </MDButton>
          </MDTypography>
        ),
      },
      {
        name: <Name image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
        birthdate: <BirthDate title="22 Januari 1995" description="27 Tahun" />,
        status: (
          <Status
            homeCare={10}
            teleFisio={5}
            inClinic={3}
            tools={1}
            webinars={10}
            status={<MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />}
          />
        ),
        action: (
          <MDTypography
            component="a"
            href="/patient/123"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            <MDButton variant="gradient" color="info">
              Detail
            </MDButton>
          </MDTypography>
        ),
      },
      {
        name: <Name image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
        birthdate: <BirthDate title="22 Januari 1995" description="27 Tahun" />,
        status: (
          <Status
            homeCare={10}
            teleFisio={5}
            inClinic={3}
            tools={1}
            webinars={10}
            status={<MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />}
          />
        ),
        action: (
          <MDTypography
            component="a"
            href="/patient/123"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            <MDButton variant="gradient" color="info">
              Detail
            </MDButton>
          </MDTypography>
        ),
      },
      {
        name: <Name image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
        birthdate: <BirthDate title="22 Januari 1995" description="27 Tahun" />,
        status: (
          <Status
            homeCare={10}
            teleFisio={5}
            inClinic={3}
            tools={1}
            webinars={10}
            status={<MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />}
          />
        ),
        action: (
          <MDTypography
            component="a"
            href="/patient/123"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            <MDButton variant="gradient" color="info">
              Detail
            </MDButton>
          </MDTypography>
        ),
      },
      {
        name: <Name image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
        birthdate: <BirthDate title="22 Januari 1995" description="27 Tahun" />,
        status: (
          <Status
            homeCare={10}
            teleFisio={5}
            inClinic={3}
            tools={1}
            webinars={10}
            status={<MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />}
          />
        ),
        action: (
          <MDTypography
            component="a"
            href="/patient/123"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            <MDButton variant="gradient" color="info">
              Detail
            </MDButton>
          </MDTypography>
        ),
      },
    ],
  };
}
