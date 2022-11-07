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
import { ActionColumnFormatter, AddressColumnFormatter, NameColumnFormatter, StatusColumnFormatter, TimeColumnFormatter, TypeColumnFormatter } from "./formatter";

export default function data(entities) {
  const dataMapping = entities.map((item, index) => {
    return {
      patient: <NameColumnFormatter image={team2} name={item.patient_detail.name} phoneNumber={item.patient_detail.phone_number} />,
      address: <AddressColumnFormatter address={item.address} />,
      date: <TimeColumnFormatter from={item.date_appointment} to={item.date_appointment} />,
      type: <TypeColumnFormatter />,
      status: <StatusColumnFormatter />,
      action: <ActionColumnFormatter id={item._id}/>
    }
  })
  return {
    columns: [
      { Header: "Patient", accessor: "patient", width: "20%", align: "left" },
      { Header: "Address", accessor: "address", width: "20%", align: "left" },
      { Header: "Date", accessor: "date", width: "20%", align: "center" },
      { Header: "Type", accessor: "type", width: "10%", align: "center" },
      { Header: "Status", accessor: "status", width: "10%", align: "center" },
      { Header: "action", accessor: "action", width: "20%", align: "center" },
    ],

    rows: dataMapping,
  };
}
