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

// Images
import team2 from "assets/images/team-2.jpg";

import {
  ActionColumnFormatter,
  NameColumnFormatter,
  OrderDateColumnFormatter,
  PriceColumnFormatter,
  StatusColumnFormatter,
} from "./formatter";

export default function data(entities) {
  const dataMapping = entities.map((item, index) => {
    return {
      name: <NameColumnFormatter image={team2} name={item.user.name} email={item.user.email} />,
      orderDate: <OrderDateColumnFormatter date_order={item.created_at} />,
      price: <PriceColumnFormatter price={item.price_paid} />,
      status: <StatusColumnFormatter status={item.status} />,
      action: <ActionColumnFormatter id={item.id} />,
    };
  });

  return {
    columns: [
      { Header: "Name", accessor: "name", width: "25%", align: "left" },
      { Header: "Order Date", accessor: "orderDate", width: "7%", align: "left" },
      { Header: "Price", accessor: "price", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: dataMapping,
  };
}
