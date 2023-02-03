import React from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { dateFormater } from "helpers/DateHelpers";
import { Link } from "react-router-dom";
import { formatDateRawToYMD } from "helpers/DateHelpers";

export default function RelatedMenu({ appointments, records }) {
  return (
    <MDBox width="70%">
      <div className="flex bg-white rounded-lg p-[15px]">
        <div className="w-full flex flex-col gap-[30px]">
          <div className="w-full">
            <MDTypography variant="h6" color="dark">
              Related Data Patient
            </MDTypography>
          </div>
          <div className="w-full flex flex-col bg-slate-200 p-3 rounded-lg">
            <div className="w-full">
              <MDTypography variant="h6" color="dark">
                Appointment
              </MDTypography>
            </div>
            <div className="flex flex-col gap-[10px] max-h-[200px] overflow-y-scroll">
              {appointments?.map((item, index) => (
                <div
                  className="bg-slate-100 w-full rounded-lg p-1 flex gap-[20px] justify-between items-center"
                  key={item._id}
                >
                  <h4 className="text-[16px] px-[10px]">
                    {`${item.appointment_type} || `}
                    <b className="text-red-500">{`${item.patient_detail.name} `}</b>
                    <span className="text-blue-700">
                      {" "}
                      {`${dateFormater(item.date_appointment)}  ${item.time_appointment} WIB`}
                    </span>
                  </h4>
                  <div className="flex gap-[10px]">
                    <Link to={`/appointment/${item._id}`}>
                      <MDButton variant="gradient" color="info">
                        Detail
                      </MDButton>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col bg-slate-200 p-3 rounded-lg">
            <div className="w-full">
              <MDTypography variant="h6" color="dark">
                Medical Record
              </MDTypography>
            </div>
            <div className="flex flex-col gap-[10px] max-h-[200px] overflow-y-scroll">
              {records?.map((item, index) => (
                <div
                  className="bg-slate-100 w-full rounded-lg p-1 flex gap-[20px] justify-between items-center"
                  key={item._id}
                >
                  <h4 className="text-[16px] px-[10px]">
                    {`${item.appointment_type} ||  `}
                    <span className="text-blue-700">{`${formatDateRawToYMD(item.date)}`}</span>
                  </h4>
                  <div className="flex gap-[10px]">
                    <Link to={`/medical-record/${item._id}`}>
                      <MDButton variant="gradient" color="info">
                        Detail
                      </MDButton>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MDBox>
  );
}
