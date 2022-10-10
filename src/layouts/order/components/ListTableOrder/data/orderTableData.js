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

import { Link } from "react-router-dom";

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

  const OrderDate = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Name", accessor: "name", width: "25%", align: "left" },
      { Header: "Order Date", accessor: "orderDate", width: "7%", align: "left" },
      { Header: "Price", accessor: "price", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        name: <Name image={team2} name="John Michael" email="john@creative-tim.com" />,
        orderDate: <OrderDate title="12 Januari 1997" description="16:00 WIB" />,
        price: (
          <MDTypography variant="caption" color="info" fontWeight="medium">
            Rp. 2.000.000
          </MDTypography>
        ),
        status: <MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />,
        action: (
          <Link to="/order/123">
            <MDTypography variant="caption" color="text" fontWeight="medium">
              <MDButton variant="gradient" color="info">
                Detail
              </MDButton>
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="medium">
              <MDButton variant="gradient" color="primary">
                Set To Paid
              </MDButton>
            </MDTypography>
          </Link>
        ),
      },
      {
        name: <Name image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
        orderDate: <OrderDate title="22 Januari 1995" description="16:00 WIB" />,
        price: (
          <MDTypography variant="caption" color="info" fontWeight="medium">
            Rp. 2.000.000
          </MDTypography>
        ),
        status: <MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />,
        action: (
          <Link to="/order/123">
            <MDTypography variant="caption" color="text" fontWeight="medium">
              <MDButton variant="gradient" color="info">
                Detail
              </MDButton>
            </MDTypography>{" "}
            <MDTypography variant="caption" color="text" fontWeight="medium">
              <MDButton variant="gradient" color="primary">
                Set To Paid
              </MDButton>
            </MDTypography>
          </Link>
        ),
      },
      {
        name: <Name image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
        orderDate: <OrderDate title="22 Januari 1995" description="16:00 WIB" />,
        price: (
          <MDTypography variant="caption" color="info" fontWeight="medium">
            Rp. 2.000.000
          </MDTypography>
        ),
        status: <MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />,
        action: (
          <Link to="/order/123">
            <MDTypography variant="caption" color="text" fontWeight="medium">
              <MDButton variant="gradient" color="info">
                Detail
              </MDButton>
            </MDTypography>{" "}
            <MDTypography variant="caption" color="text" fontWeight="medium">
              <MDButton variant="gradient" color="primary">
                Set To Paid
              </MDButton>
            </MDTypography>
          </Link>
        ),
      },
      {
        name: <Name image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
        orderDate: <OrderDate title="22 Januari 1995" description="16:00 WIB" />,
        price: (
          <MDTypography variant="caption" color="info" fontWeight="medium">
            Rp. 2.000.000
          </MDTypography>
        ),
        status: <MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />,
        action: (
          <Link to="/order/123">
            <MDTypography variant="caption" color="text" fontWeight="medium">
              <MDButton variant="gradient" color="info">
                Detail
              </MDButton>
            </MDTypography>{" "}
            <MDTypography variant="caption" color="text" fontWeight="medium">
              <MDButton variant="gradient" color="primary">
                Set To Paid
              </MDButton>
            </MDTypography>
          </Link>
        ),
      },
      {
        name: <Name image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
        orderDate: <OrderDate title="22 Januari 1995" description="16:00 WIB" />,
        price: (
          <MDTypography variant="caption" color="info" fontWeight="medium">
            Rp. 2.000.000
          </MDTypography>
        ),
        status: <MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />,
        action: (
          <Link to="/order/123">
            <MDTypography variant="caption" color="text" fontWeight="medium">
              <MDButton variant="gradient" color="info">
                Detail
              </MDButton>
            </MDTypography>{" "}
            <MDTypography variant="caption" color="text" fontWeight="medium">
              <MDButton variant="gradient" color="primary">
                Set To Paid
              </MDButton>
            </MDTypography>
          </Link>
        ),
      },
      {
        name: <Name image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
        orderDate: <OrderDate title="22 Januari 1995" description="16:00 WIB" />,
        price: (
          <MDTypography variant="caption" color="info" fontWeight="medium">
            Rp. 2.000.000
          </MDTypography>
        ),
        status: <MDBadge badgeContent="active" color="success" variant="gradient" size="sm" />,
        action: (
          <Link to="/order/123123123">
            <MDTypography variant="caption" color="text" fontWeight="medium">
              <MDButton variant="gradient" color="info">
                Detail
              </MDButton>
            </MDTypography>{" "}
            <MDTypography variant="caption" color="text" fontWeight="medium">
              <MDButton variant="gradient" color="primary">
                Set To Paid
              </MDButton>
            </MDTypography>
          </Link>
        ),
      },
    ],
  };
}
